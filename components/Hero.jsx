'use client';

import { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
import * as THREE from 'three';
import ParticleBackground from './ParticleBackground';

const Hero = ({ theme, jumpTo }) => {
  const isDark = theme === 'dark';
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const characterRef = useRef(null);
  const bubblesRef = useRef([]);
  const lightsRef = useRef({ ambient: null, main: null });
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const COLORS = [0x0eaac8, 0x1dc393, 0x27bce2, 0x7fe7ce];

  const colors = {
    primary: '#009D8C',
    secondary: '#00B8A3',
    accent1: '#00D2FF',
    accent2: '#1dc393',
  };

  useEffect(() => {
    if (!mountRef.current) return;

    function initThree() {
      if (!mountRef.current) return () => {};

      const width = window.innerWidth;
      const height = window.innerHeight;

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.z = 35;
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;

      if (mountRef.current) {
        mountRef.current.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.4 : 1.0);
      scene.add(ambientLight);
      lightsRef.current.ambient = ambientLight;

      const pointLight = new THREE.PointLight(0xffffff, isDark ? 2.0 : 0.8);
      pointLight.position.set(20, 40, 30);
      scene.add(pointLight);
      lightsRef.current.main = pointLight;

      const fillLight = new THREE.PointLight(0x0eaac8, 0.2);
      fillLight.position.set(-20, -10, 10);
      scene.add(fillLight);

      const group = new THREE.Group();
      const coreGeo = new THREE.SphereGeometry(2.8, 32, 32);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0.1,
        transparent: true,
        opacity: 1.0,
        emissive: 0xffffff,
        emissiveIntensity: 0.3,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const sensorGeo = new THREE.IcosahedronGeometry(0.25, 2);
      const sensorMat = new THREE.MeshBasicMaterial({ color: 0x1dc393 });
      const sensorL = new THREE.Mesh(sensorGeo, sensorMat);
      sensorL.position.set(1.1, 0.6, 2.4);
      group.add(sensorL);

      const sensorR = new THREE.Mesh(sensorGeo, sensorMat);
      sensorR.position.set(-1.1, 0.6, 2.4);
      group.add(sensorR);

      group.userData = { phase: 0, amplitude: 8, speed: 0.04 };
      characterRef.current = group;
      scene.add(group);

      const bubbles = [];
      for (let i = 0; i < 25; i++) {
        const size = Math.random() * 1.5 + 0.3;
        const geo = new THREE.IcosahedronGeometry(size, 1);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const mat = new THREE.MeshStandardMaterial({
          color: color,
          transparent: true,
          opacity: isDark ? 0.5 : 0.4,
          flatShading: true,
          emissive: color,
          emissiveIntensity: 0.2,
        });
        const bubble = new THREE.Mesh(geo, mat);
        bubble.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 40);
        bubble.userData = {
          velocity: new THREE.Vector3((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03),
          velocityScaled: new THREE.Vector3(),
          rotation: Math.random() * 0.02
        };
        bubbles.push(bubble);
        scene.add(bubble);
      }
      bubblesRef.current = bubbles;

      renderer.render(scene, camera);

      const handleMouseMove = (e) => {
        mouseRef.current.x = (e.clientX - window.innerWidth / 2) * 0.02;
        mouseRef.current.y = (e.clientY - window.innerHeight / 2) * 0.02;
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);

      let lastTime = performance.now();

      const animate = (currentTime) => {
        if (!mountRef.current || !renderer || !scene || !camera) return;

        frameRef.current = requestAnimationFrame(animate);

        const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2);
        lastTime = currentTime;

        camera.position.x += (mouseRef.current.x - camera.position.x) * 0.05;
        camera.position.y += (-mouseRef.current.y - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        if (characterRef.current) {
          const data = characterRef.current.userData;
          data.phase += data.speed * deltaTime;
          characterRef.current.position.y = Math.sin(data.phase) * data.amplitude;
          const scaleValue = 1 + Math.sin(data.phase * 2) * 0.15;
          characterRef.current.scale.set(scaleValue, scaleValue, scaleValue);
        }

        if (bubblesRef.current && bubblesRef.current.length > 0) {
          bubblesRef.current.forEach(b => {
            if (b && b.userData && b.userData.velocity) {
              b.userData.velocityScaled.copy(b.userData.velocity).multiplyScalar(deltaTime);
              b.position.add(b.userData.velocityScaled);
              b.rotation.x += b.userData.rotation * deltaTime;
              const lim = { x: 50, y: 30, z: 25 };
              if (Math.abs(b.position.x) > lim.x) b.userData.velocity.x *= -1;
              if (Math.abs(b.position.y) > lim.y) b.userData.velocity.y *= -1;
              if (Math.abs(b.position.z) > lim.z) b.userData.velocity.z *= -1;
            }
          });
        }

        renderer.render(scene, camera);
      };

      animate(performance.now());

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
        if (renderer) {
          renderer.dispose();
        }
      };
    }

      return initThree();
    }, [isDark]);

  useEffect(() => {
    if (lightsRef.current.ambient && lightsRef.current.main) {
      lightsRef.current.ambient.intensity = isDark ? 0.4 : 1.0;
      lightsRef.current.main.intensity = isDark ? 2.0 : 0.8;
    }

    if (bubblesRef.current && bubblesRef.current.length > 0) {
      bubblesRef.current.forEach(bubble => {
        if (bubble && bubble.material) {
          bubble.material.opacity = isDark ? 0.5 : 0.4;
        }
      });
    }
  }, [isDark]);

  return (
    <section
      id="hero"
      className="hero-container relative min-h-screen z-10"
      style={{
        backgroundColor: isDark ? '#000000' : '#f8fafc',
        backgroundImage: `url('/assets/Bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>{`
        .hero-container {
          will-change: opacity, transform;
        }

        .hero-3d-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 1;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-3d-canvas canvas {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          position: absolute;
          top: 0;
          left: 0;
        }

        .hero-ui {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          z-index: 10;
          pointer-events: none;
          padding: 2rem;
          padding-top: 22vh;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-content h1 {
          font-size: clamp(2.4rem, 11vw, 6rem);
          font-weight: 900;
          line-height: 0.85;
          margin-bottom: 1.8rem;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          pointer-events: auto;
          color: #000000;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: #000000;
          max-width: 620px;
          margin: 0 auto 3rem;
          pointer-events: auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-cta-group {
          display: flex;
          gap: 1.2rem;
          pointer-events: auto;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 1.2rem 2.4rem;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.4s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, ${colors.accent1}, ${colors.primary}, ${colors.secondary});
          color: white;
          box-shadow: 0 12px 35px rgba(0, 157, 140, 0.35);
        }

        .hero-btn-primary:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 157, 140, 0.45);
        }

        .hero-btn-secondary {
          background: ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.04)'};
          color: ${isDark ? '#ffffff' : '#0f172a'};
          border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.08)'};
          backdrop-filter: blur(25px);
        }

        .hero-btn-secondary:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.08)'};
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-container {
            background-image: url('/assets/evoke_mobile.png') !important;
          }
          .hero-content h1 {
            font-size: clamp(2.8rem, 14vw, 4.5rem);
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            align-items: center;
          }
          .hero-btn {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }
      `}</style>

      {/* <ParticleBackground theme={theme} /> */}

      <main className="hero-ui">
        <section className="hero-content">
          <h1
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards'
            }}
          >
            Intelligence<br/>
            That Works for You
          </h1>
          <p
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}
          >
            A next-generation enterprise AI framework setting the standard for intelligent growth and scalable, high-performance systems.
          </p>
          <div
            className="hero-cta-group"
            style={{
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
            }}
          >
            <button className="hero-btn hero-btn-primary" onClick={() => jumpTo('contact')}>
              Get Started <Zap size={18} />
            </button>

          </div>
        </section>
      </main>

      {/* Subtle bottom gradient blend into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.7) 85%,
            rgba(255, 255, 255, 1) 100%
          )`,
        }}
      />
    </section>
  );
};

export default Hero;
