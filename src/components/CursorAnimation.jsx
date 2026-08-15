import React, { useEffect, useState } from 'react';

export default function CursorAnimation() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth trail spring interpolation
    let animId;
    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, .model-card, .spec-cell, input, textarea');
      if (target) {
        setIsHovered(true);
        const label = target.getAttribute('title') || target.innerText || 'EXPLORE';
        setHoverLabel(label.slice(0, 14).toUpperCase());
      } else {
        setIsHovered(false);
        setHoverLabel('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner Precision Crosshair Pointer */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`
        }}
      />

      {/* Outer Spring Dynamic Ring with M Tricolor Pulse */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center border ${
          isHovered 
            ? 'w-16 h-16 border-sky-400 bg-sky-500/10 backdrop-blur-xs' 
            : 'w-8 h-8 border-zinc-500/50'
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          borderRadius: isHovered ? '0px' : '50%'
        }}
      >
        {/* M Tricolor Hover Ring Outline */}
        {isHovered && (
          <div className="absolute inset-0 border border-transparent p-[1px]">
            <div className="m-stripe-divider h-[2px]"></div>
          </div>
        )}

        {/* Hover Label Telemetry Readout */}
        {isHovered && hoverLabel && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-sky-400 text-center px-1 truncate max-w-[56px]">
            {hoverLabel}
          </span>
        )}
      </div>
    </div>
  );
}
