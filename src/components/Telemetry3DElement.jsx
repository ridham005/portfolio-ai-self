import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box, Circle, RefreshCw, Cpu } from 'lucide-react';

export default function Telemetry3DElement() {
  const mountRef = useRef(null);
  const [geoMode, setGeoMode] = useState('sphere'); // 'sphere' | 'cube' | 'torus'

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Geometry Mesh based on mode
    let geometry;
    if (geoMode === 'sphere') {
      geometry = new THREE.IcosahedronGeometry(1.6, 2);
    } else if (geoMode === 'cube') {
      geometry = new THREE.BoxGeometry(2, 2, 2, 4, 4, 4);
    } else {
      geometry = new THREE.TorusGeometry(1.4, 0.4, 16, 50);
    }

    // Wireframe Material with M-Blue color
    const material = new THREE.MeshBasicMaterial({
      color: 0x0066b1,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Inner Glowing Points (M Red & M Dark Blue)
    const pointsGeo = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const mColors = [
      new THREE.Color(0x0066b1), // M Light Blue
      new THREE.Color(0x1c69d4), // M Dark Blue
      new THREE.Color(0xe22718), // M Red
    ];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.4 + Math.random() * 0.4;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = mColors[Math.floor(Math.random() * 3)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(pointsGeo, pointsMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;

      particles.rotation.x -= 0.003;
      particles.rotation.y -= 0.005;

      // Smooth mouse response tilt
      mesh.rotation.y += (mouseX * 0.5 - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (-mouseY * 0.5 - mesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
    };
  }, [geoMode]);

  return (
    <div className="relative bg-zinc-950 border border-zinc-800 p-6 flex flex-col items-center justify-between">
      {/* 3D Canvas Header */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-sky-400" />
          <span className="text-xs font-mono font-bold text-white uppercase">
            3D TELEMETRY MATRIX /// ORIGIN 3D
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setGeoMode('sphere')}
            className={`px-2 py-1 text-[10px] font-mono border rounded-none ${
              geoMode === 'sphere' ? 'border-sky-400 bg-sky-950 text-sky-400' : 'border-zinc-800 text-zinc-500'
            }`}
          >
            SPHERE 3D
          </button>
          <button
            onClick={() => setGeoMode('cube')}
            className={`px-2 py-1 text-[10px] font-mono border rounded-none ${
              geoMode === 'cube' ? 'border-red-400 bg-red-950 text-red-400' : 'border-zinc-800 text-zinc-500'
            }`}
          >
            CUBE 3D
          </button>
          <button
            onClick={() => setGeoMode('torus')}
            className={`px-2 py-1 text-[10px] font-mono border rounded-none ${
              geoMode === 'torus' ? 'border-blue-400 bg-blue-950 text-blue-400' : 'border-zinc-800 text-zinc-500'
            }`}
          >
            TORUS 3D
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount Container */}
      <div ref={mountRef} className="w-full h-64 my-2 cursor-grab active:cursor-grabbing"></div>

      {/* Footer Info */}
      <div className="w-full pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
        <span>INTERACTIVE 3D M-GEOMETRY</span>
        <span className="text-sky-400 font-bold">MOVE CURSOR TO ROTATE</span>
      </div>
    </div>
  );
}
