import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";

function buildGroups(text) {
  const lines = text.split("\n");
  const groups = [];
  let globalIdx = 0;
  let gi = 0;
  lines.forEach((line, lineIdx) => {
    let posInLine = 0;
    (line.match(/\S+|\s+/g) ?? []).forEach((seg) => {
      groups.push({
        type: /^\s/.test(seg) ? "space" : "word",
        chars: seg.split("").map((c) => ({
          char: c,
          globalIdx: globalIdx++,
          posInLine: posInLine++,
          lineIdx,
        })),
        lineIdx,
        gi: gi++,
      });
    });
    if (lineIdx < lines.length - 1) {
      groups.push({ type: "newline", chars: [], lineIdx, gi: gi++ });
    }
  });
  return { groups, totalVisible: globalIdx };
}

function rawDelay(c, total, pos, mode, vli) {
  const S = 0.06;
  if (mode === "inPlace") return 0;
  if (mode === "multiLine" && vli) {
    const p = vli.charVLPos.get(c.globalIdx) ?? 0;
    return p * S;
  }
  return c.globalIdx * S;
}

function scaledTiming(rawD, maxRaw, duration) {
  if (maxRaw <= 0) return { delay: 0, charDur: duration };
  return {
    charDur: duration * 0.5,
    delay: (rawD * (duration * 0.5)) / maxRaw,
  };
}

function getAppear(c, total, pos, mode) {
  const e = c.globalIdx % 2 === 0;
  if (mode === "inPlace") return e ? "smt-ap-c-a" : "smt-ap-c-b";
  if (pos === "topLeft") return e ? "smt-ap-tl-a" : "smt-ap-tl-b";
  return e ? "smt-ap-bl-a" : "smt-ap-bl-b";
}

function parseT(t, def) {
  if (!t) return { duration: def.duration, delay: def.delay, timing: "cubic-bezier(0,0,0.58,1)" };
  return {
    duration: typeof t.duration === "number" ? t.duration : def.duration,
    delay: typeof t.delay === "number" ? t.delay : def.delay,
    timing: "cubic-bezier(0,0,0.58,1)",
  };
}

function buildKF(color, intensity) {
  const n = (Math.max(1, Math.min(20, intensity)) - 1) / 19;
  const r = (v) => +v.toFixed(2);
  const peakB = Math.round(6 + n * 180);
  const initB = Math.round(2 + n * 60);

  const layers = 1 + Math.round(n * 3);
  const stack = (blur) =>
    Array.from({ length: layers }, (_, i) => `0 0 ${Math.round((blur * (i + 1)) / layers)}px ${color}`).join(",");
  const peak = stack(peakB);
  const init = stack(initB);

  const d = 0.7 + n * 0.8;
  const ic = r(1.3 + n * 0.5);
  const ic2 = r(1.15 + n * 0.35);

  return `
@keyframes smt-ap-c-a{from{opacity:0;text-shadow:${init};transform:scale(${ic})}40%{text-shadow:${peak}}to{opacity:1;text-shadow:0 0 0 ${color};transform:none}}
@keyframes smt-ap-c-b{from{opacity:0;text-shadow:${init};transform:scale(${ic2})}40%{text-shadow:${peak}}to{opacity:1;text-shadow:0 0 0 ${color};transform:none}}
@keyframes smt-ap-bl-a{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-15 * d)}rem,${r(8 * d)}rem,0) rotate(30deg) skewX(-40deg) scale(0.7)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:0 0 0 ${color};transform:none}}
@keyframes smt-ap-bl-b{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-18 * d)}rem,${r(8 * d)}rem,0) rotate(30deg) skewX(40deg) scale(0.5)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:0 0 0 ${color};transform:none}}
`;
}

export default function SmokyText({
  text = "ENGINEERING\nHIGH-PERFORMANCE\nDIGITAL SYSTEMS.",
  color = "#ffffff",
  appearTrigger = "default",
  intensity = 12,
  position = "bottomLeft",
  animationMode = "singleLine",
  className = "",
  style = {}
}) {
  const kfEl = useRef(null);
  useEffect(() => {
    kfEl.current = document.createElement("style");
    document.head.appendChild(kfEl.current);
    return () => {
      kfEl.current?.remove();
      kfEl.current = null;
    };
  }, []);

  useEffect(() => {
    if (kfEl.current) kfEl.current.textContent = buildKF(color, intensity);
  }, [color, intensity]);

  const { groups, totalVisible } = useMemo(() => buildGroups(text), [text]);
  const appearT = useMemo(() => parseT(null, { duration: 1.8, delay: 0 }), []);

  const containerRef = useRef(null);
  const wordRefs = useRef(new Map());
  const [vli, setVli] = useState(null);

  const measureVL = useCallback(() => {
    if (animationMode !== "multiLine") {
      setVli(null);
      return;
    }
    const items = [];
    groups.forEach((g) => {
      if (g.type === "newline" || !g.chars.length) return;
      const el = wordRefs.current.get(g.gi);
      if (el) items.push({ top: el.offsetTop, gi: g.gi, chars: g.chars });
    });
    items.sort((a, b) => a.gi - b.gi);
    const tops = [...new Set(items.map((i) => i.top))].sort((a, b) => a - b);
    const topToVL = new Map(tops.map((t, i) => [t, i]));
    const charVL = new Map(), charVLPos = new Map();
    const vlLen = new Map(), vlPos = new Map();
    items.forEach(({ top, chars }) => {
      const vl = topToVL.get(top) ?? 0;
      chars.forEach((c) => {
        const p = vlPos.get(vl) ?? 0;
        charVL.set(c.globalIdx, vl);
        charVLPos.set(c.globalIdx, p);
        vlPos.set(vl, p + 1);
        vlLen.set(vl, p + 1);
      });
    });
    setVli({ charVL, charVLPos, vlLen });
  }, [groups, animationMode]);

  useEffect(() => {
    measureVL();
    if (!containerRef.current) return;
    const ro = new ResizeObserver(measureVL);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measureVL]);

  const maxRaw = useMemo(() => {
    let m = 0;
    groups.forEach((g) =>
      g.chars.forEach((c) => {
        const d = rawDelay(c, totalVisible, position, animationMode, vli);
        if (d > m) m = d;
      })
    );
    return m;
  }, [groups, totalVisible, position, animationMode, vli]);

  const [phase, setPhase] = useState("hidden");
  const tRef = useRef([]);
  const clear = () => {
    tRef.current.forEach(clearTimeout);
    tRef.current = [];
  };
  const later = (fn, ms) => tRef.current.push(setTimeout(fn, ms));

  const runAppear = useCallback(() => {
    clear();
    setPhase("hidden");
    later(() => {
      setPhase("appearing");
      later(() => setPhase("visible"), appearT.duration * 1000 + 200);
    }, 100);
  }, [appearT.duration]);

  useEffect(() => {
    clear();
    runAppear();
    return clear;
  }, [text, color, intensity, position, animationMode, runAppear]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{ style }}
    >
      <div
        style={{
          color: "transparent",
          backfaceVisibility: "hidden",
          userSelect: "none",
          wordBreak: "keep-all",
        }}
      >
        {groups.map((group) => {
          if (group.type === "newline") return <br key={group.gi} />;
          if (group.type === "space")
            return (
              <span
                key={group.gi}
                ref={(el) => { if (el) wordRefs.current.set(group.gi, el); }}
                style={{ display: "inline", whiteSpace: "pre" }}
              >
                {" "}
              </span>
            );

          return (
            <span
              key={group.gi}
              ref={(el) => { if (el) wordRefs.current.set(group.gi, el); }}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {group.chars.map((c) => {
                const base = { display: "inline-block", textShadow: `0 0 0 ${color}` };
                if (phase === "hidden") return <span key={c.globalIdx} style={{ ...base, opacity: 0 }}>{c.char}</span>;
                if (phase === "visible") return <span key={c.globalIdx} style={{ ...base, opacity: 1 }}>{c.char}</span>;
                if (phase === "appearing") {
                  const rd = rawDelay(c, totalVisible, position, animationMode, vli);
                  const { delay, charDur } = scaledTiming(rd, maxRaw, appearT.duration);
                  const anim = getAppear(c, totalVisible, position, animationMode);
                  return (
                    <span
                      key={c.globalIdx}
                      style={{
                        ...base,
                        animation: `${anim} ${charDur}s ${delay}s ${appearT.timing} both`,
                      }}
                    >
                      {c.char}
                    </span>
                  );
                }
                return null;
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
}
