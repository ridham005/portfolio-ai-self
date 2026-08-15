import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Gauge, Sparkles, Zap } from 'lucide-react';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
];

const DEFAULTS = {
  background: "#000000",
  lineColor: "#3c3c3c",
  lineOpacity: 60,
  colors: ["#0066b1", "#1c69d4", "#e22718", "#0653b6", "#2b2b2b", "#ffffff"],
  grid: 4,
  cellMode: "square",
  tunnelSize: 2,
  speed: 25,
  boost: 75,
  fade: 90,
  labelText: "HOLD TO ACCELERATE ///",
  labelFill: "#ffffff",
  labelColor: "#000000",
};

const TUNNEL_WIDTH = 2;
const TUNNEL_HEIGHT = 1.8;
const BASE_SEGMENT_DEPTH = 1;
const TUNNEL_LENGTH = 16;
const LINE_RADIUS = 0.0035;
const SCROLL_TO_Z = 0.05;
const CAMERA_CHASE = 0.1;
const FADE_IN = 0.8;

const fogFarFor = (segCount, segDepth) => segCount * segDepth * 0.95;

const slideOf = (entry) => {
  const raw = entry?.image ?? entry;
  const url = typeof raw === "string" ? raw : (raw?.src ?? "");
  const y = typeof entry?.y === "number" ? entry.y : 50;
  return { url, y };
};

export default function GalleryTunnel(props) {
  const {
    images = GALLERY_IMAGES,
    colors = DEFAULTS.colors,
    background = DEFAULTS.background,
    lineColor = DEFAULTS.lineColor,
    lineOpacity = DEFAULTS.lineOpacity,
    grid = DEFAULTS.grid,
    cellMode = DEFAULTS.cellMode,
    tunnelSize = DEFAULTS.tunnelSize,
    speed = DEFAULTS.speed,
    boost = DEFAULTS.boost,
    fade = DEFAULTS.fade,
    labelText = DEFAULTS.labelText,
    labelFill = DEFAULTS.labelFill,
    labelColor = DEFAULTS.labelColor,
  } = props;

  const frameRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  const slides = useMemo(() => {
    const list = (images ?? []).map(slideOf).filter((s) => s.url);
    return list.length ? list : GALLERY_IMAGES.map((url) => ({ url, y: 50 }));
  }, [images]);

  const slideKey = slides.map((s) => `${s.url}|${s.y}`).join(",");
  const palette = useMemo(() => (colors ?? []).filter(Boolean), [colors]);

  const cfgRef = useRef(null);
  cfgRef.current = {
    speed: Math.max(0, speed) / 100,
    boost: Math.max(0, boost) / 10,
  };

  useEffect(() => {
    const frame = frameRef.current;
    const canvas = canvasRef.current;
    if (!frame || !canvas) return;

    let pressed = false;
    let alive = true;

    const sizeUi = Math.max(1, Math.min(20, Math.round(tunnelSize)));
    const sizeK = 1 + ((sizeUi - 1) * 2) / 19;

    const rows = Math.max(1, Math.round(grid));
    let cols, colW, rowH, cellDepth, depthCells, segDepth, tunnelW, tunnelH;

    if (cellMode === "square") {
      const cell = (TUNNEL_HEIGHT * sizeK) / rows;
      cols = Math.max(1, Math.round((TUNNEL_WIDTH * sizeK) / cell));
      depthCells = Math.max(1, Math.round(BASE_SEGMENT_DEPTH / cell));
      cellDepth = cell;
      segDepth = depthCells * cell;
      tunnelH = cell * rows;
      tunnelW = cell * cols;
      colW = cell;
      rowH = cell;
    } else {
      cols = rows;
      depthCells = 1;
      segDepth = BASE_SEGMENT_DEPTH;
      cellDepth = BASE_SEGMENT_DEPTH;
      tunnelW = TUNNEL_WIDTH * sizeK;
      tunnelH = TUNNEL_HEIGHT * sizeK;
      colW = tunnelW / cols;
      rowH = tunnelH / rows;
    }

    const segCount = Math.max(6, Math.round(TUNNEL_LENGTH / segDepth));
    const perimeterCells = 2 * cols + 2 * rows;
    const countMatched = Math.min(0.5, (2 * rows * cellDepth) / perimeterCells);
    const fillChance = cellMode === "square" ? (countMatched + 0.5) / 2 : 0.5;
    const fogFar = fogFarFor(segCount, segDepth);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);

    const fogNear = Math.min(
      fogFar * (1 - Math.min(100, Math.max(0, fade)) / 100),
      fogFar - 0.01
    );
    scene.fog = new THREE.Fog(new THREE.Color(background), fogNear, fogFar);

    const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const lineMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(lineColor),
      transparent: true,
      opacity: Math.max(0, Math.min(100, lineOpacity)) / 100,
    });

    const hw = tunnelW / 2;
    const hh = tunnelH / 2;

    const geoFloor = new THREE.PlaneGeometry(colW, cellDepth);
    const geoWall = new THREE.PlaneGeometry(cellDepth, rowH);

    const railLength = segCount * segDepth + segDepth;
    const geoTubeZ = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -railLength)),
      1, LINE_RADIUS, 8
    );
    const geoTubeX = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(tunnelW, 0, 0)),
      1, LINE_RADIUS, 8
    );
    const geoTubeY = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, tunnelH, 0)),
      1, LINE_RADIUS, 8
    );

    const colorMats = palette.map(
      (hex) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex), side: THREE.DoubleSide })
    );

    const fading = [];
    const imageMats = slides.map(({ url, y }) => {
      const mat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      loader.load(
        url,
        (tex) => {
          if (!alive) {
            tex.dispose();
            return;
          }
          tex.minFilter = THREE.LinearFilter;
          tex.generateMipmaps = false;
          tex.colorSpace = THREE.SRGBColorSpace;

          const iw = tex.image?.width ?? 1;
          const ih = tex.image?.height ?? 1;
          const aspect = iw / ih;
          if (aspect > 1) {
            tex.repeat.set(1 / aspect, 1);
            tex.offset.set((1 - 1 / aspect) / 2, 0);
          } else {
            const rY = aspect;
            const anchor = Math.max(0, Math.min(100, y)) / 100;
            tex.repeat.set(1, rY);
            tex.offset.set(0, (1 - rY) * (1 - anchor));
          }

          mat.map = tex;
          mat.needsUpdate = true;
          fading.push(mat);
        },
        undefined,
        () => {}
      );
      return mat;
    });

    let populateIndex = 0;
    let colorIndex = 0;
    let imageIndex = 0;

    const tube = (geo, x, y, z = 0) => {
      const m = new THREE.Mesh(geo, lineMaterial);
      m.position.set(x, y, z);
      return m;
    };

    const SLOTS = [];
    for (let d = 0; d < depthCells; d++) {
      const z = -(d + 0.5) * cellDepth;
      for (let i = 0; i < cols; i++) {
        const x = -hw + i * colW + colW / 2;
        SLOTS.push({ geo: geoFloor, pos: new THREE.Vector3(x, -hh, z), rot: new THREE.Euler(-Math.PI / 2, 0, 0), d });
        SLOTS.push({ geo: geoFloor, pos: new THREE.Vector3(x, hh, z), rot: new THREE.Euler(Math.PI / 2, 0, 0), d });
      }
      for (let i = 0; i < rows; i++) {
        const y = -hh + i * rowH + rowH / 2;
        SLOTS.push({ geo: geoWall, pos: new THREE.Vector3(-hw, y, z), rot: new THREE.Euler(0, Math.PI / 2, 0), d });
        SLOTS.push({ geo: geoWall, pos: new THREE.Vector3(hw, y, z), rot: new THREE.Euler(0, -Math.PI / 2, 0), d });
      }
    }

    function populate(group) {
      const baseRow = populateIndex;
      populateIndex += depthCells;
      const slabs = group.userData.slabs;

      for (let i = 0; i < slabs.length; i++) {
        const slab = slabs[i];
        const takesSlabs = (baseRow + SLOTS[i].d) % 2 === 0;
        if (!takesSlabs || Math.random() > fillChance) {
          slab.visible = false;
          continue;
        }
        slab.visible = true;
        if (Math.random() > 0.5) {
          slab.material = colorMats[(5 * colorIndex) % colorMats.length];
          colorIndex++;
        } else {
          slab.material = imageMats[(3 * imageIndex) % imageMats.length];
          imageIndex++;
        }
      }
    }

    function createSegment(z) {
      const group = new THREE.Group();
      group.position.z = z;

      for (let d = 0; d < depthCells; d++) {
        const zCell = -d * cellDepth;
        group.add(tube(geoTubeX, -hw, -hh, zCell));
        group.add(tube(geoTubeX, -hw, hh, zCell));
        group.add(tube(geoTubeY, -hw, -hh, zCell));
        group.add(tube(geoTubeY, hw, -hh, zCell));
      }

      const slabs = SLOTS.map((slot) => {
        const m = new THREE.Mesh(slot.geo, colorMats[0]);
        m.position.copy(slot.pos);
        m.rotation.copy(slot.rot);
        m.visible = false;
        group.add(m);
        return m;
      });
      group.userData.slabs = slabs;

      populate(group);
      return group;
    }

    const rails = new THREE.Group();
    for (let i = 0; i <= cols; i++) {
      const x = -hw + i * colW;
      rails.add(tube(geoTubeZ, x, -hh));
      rails.add(tube(geoTubeZ, x, hh));
    }
    for (let i = 1; i < rows; i++) {
      const y = -hh + i * rowH;
      rails.add(tube(geoTubeZ, -hw, y));
      rails.add(tube(geoTubeZ, hw, y));
    }
    scene.add(rails);

    const segments = [];
    for (let i = 0; i < segCount; i++) {
      const g = createSegment(-i * segDepth);
      scene.add(g);
      segments.push(g);
    }

    const resize = () => {
      const w = Math.max(1, frame.clientWidth);
      const h = Math.max(1, frame.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(frame);
    resize();

    let scrollPos = 0;
    let raf = 0;
    let last = 0;

    const animate = (now) => {
      if (!alive) return;
      raf = requestAnimationFrame(animate);
      const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
      last = now;

      const cfg = cfgRef.current;
      scrollPos += pressed ? cfg.boost : cfg.speed;

      const want = -SCROLL_TO_Z * scrollPos;
      camera.position.z += CAMERA_CHASE * (want - camera.position.z);
      rails.position.z = camera.position.z;

      const span = segCount * segDepth;
      const z = camera.position.z;
      for (const seg of segments) {
        if (seg.position.z > z + segDepth) {
          let min = 0;
          for (const s of segments) min = Math.min(min, s.position.z);
          seg.position.z = min - segDepth;
          populate(seg);
        } else if (seg.position.z < z - span - segDepth) {
          let max = -999999;
          for (const s of segments) max = Math.max(max, s.position.z);
          seg.position.z = max + segDepth;
          populate(seg);
        }
      }

      for (let i = fading.length - 1; i >= 0; i--) {
        const m = fading[i];
        m.opacity = Math.min(1, m.opacity + dt / FADE_IN);
        if (m.opacity >= 1) fading.splice(i, 1);
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    const onMove = (e) => {
      const el = cursorRef.current;
      if (!el) return;
      const rect = frame.getBoundingClientRect();
      const sx = rect.width > 0 ? frame.clientWidth / rect.width : 1;
      const sy = rect.height > 0 ? frame.clientHeight / rect.height : 1;
      el.style.left = `${(e.clientX - rect.left) * sx}px`;
      el.style.top = `${(e.clientY - rect.top) * sy}px`;
    };
    const onEnter = () => {
      const el = cursorRef.current;
      if (el) el.style.opacity = "1";
    };
    const onLeave = () => {
      pressed = false;
      const el = cursorRef.current;
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translate(0%, -100%) scale(1)";
      }
    };
    const onDown = () => {
      pressed = true;
      const el = cursorRef.current;
      if (el) el.style.transform = "translate(0%, -100%) scale(0.9)";
    };
    const onUp = () => {
      pressed = false;
      const el = cursorRef.current;
      if (el) el.style.transform = "translate(0%, -100%) scale(1)";
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerenter", onEnter);
    frame.addEventListener("pointerleave", onLeave);
    frame.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerenter", onEnter);
      frame.removeEventListener("pointerleave", onLeave);
      frame.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);

      geoFloor.dispose();
      geoWall.dispose();
      geoTubeZ.dispose();
      geoTubeX.dispose();
      geoTubeY.dispose();
      for (const m of colorMats) m.dispose();
      for (const m of imageMats) {
        m.map?.dispose();
        m.dispose();
      }
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [slideKey, palette, background, lineColor, lineOpacity, grid, cellMode, tunnelSize, fade]);

  return (
    <section className="relative w-full bg-black py-20 border-b border-zinc-900 overflow-hidden">
      <div className="container-custom mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="m-stripe-vertical h-4"></div>
              <span className="label-uppercase text-red-500 text-xs font-mono">3D GALLERY TUNNEL</span>
            </div>
            <h2 className="display-lg text-white">VISUAL GALLERY.</h2>
          </div>
        </div>
      </div>

      {/* 3D Tunnel Container */}
      <div className="relative w-full h-[520px] border-y border-zinc-800 bg-black">
        <div
          ref={frameRef}
          className="relative w-full h-full overflow-hidden select-none cursor-none"
        >
          <canvas ref={canvasRef} className="block w-full h-full" />
          
          {/* Custom Floating Telemetry Cursor Pill */}
          <div
            ref={cursorRef}
            className="absolute top-0 left-0 pointer-events-none opacity-0 bg-white text-black font-mono font-bold text-xs tracking-widest px-4 py-2 border border-zinc-300 shadow-2xl flex items-center gap-2 transition-transform duration-100 ease-out"
            style={{ transform: "translate(0%, -100%) scale(1)", borderRadius: "0px" }}
          >
            <Zap size={14} className="text-red-600 animate-pulse" />
            <span>{labelText}</span>
          </div>

          {/* Static Corner Telemetry Badges */}
          <div className="absolute top-6 left-6 pointer-events-none bg-black/80 backdrop-blur-md px-4 py-2 border border-zinc-800 text-xs font-mono text-white flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
            <span>GALLERY TUNNEL /// ACTIVE</span>
          </div>

          <div className="absolute bottom-6 right-6 pointer-events-none bg-black/80 backdrop-blur-md px-4 py-2 border border-zinc-800 text-xs font-mono text-zinc-400">
            PRESS & HOLD /// ACCELERATE
          </div>
        </div>
      </div>
    </section>
  );
}
