'use client';

import { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, directionX, directionY, size) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  }

  update(ctx, mouse, theme, canvasWidth, canvasHeight) {
    if (this.x > canvasWidth || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.directionY = -this.directionY;
    }

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * 3;
        const directionY = forceDirectionY * force * 3;

        this.x += directionX;
        this.y += directionY;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2, false);
        ctx.fillStyle = theme.highlightColor;
        ctx.fill();
      } else {
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(ctx, theme.baseColor);
      }
    } else {
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw(ctx, theme.baseColor);
    }
  }
}

const ParticleBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';

  const themeRef = useRef({
    baseColor: '#115e59',
    highlightColor: '#2dd4bf',
    lineBase: '17, 94, 89',
    lineActive: '45, 212, 191'
  });

  const mouseRef = useRef({
    x: null,
    y: null,
    radius: 150
  });

  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      themeRef.current = {
        baseColor: '#0eaac8',
        highlightColor: '#1dc393',
        lineBase: '14, 170, 200',
        lineActive: '29, 195, 147'
      };
    } else {
      themeRef.current = {
        baseColor: '#0eaac8',
        highlightColor: '#1dc393',
        lineBase: '14, 170, 200',
        lineActive: '29, 195, 147'
      };
    }
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const init = () => {
      particlesRef.current = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2.5) + 1.5;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 2) - 1;
        const directionY = (Math.random() * 2) - 1;

        particlesRef.current.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const theme = themeRef.current;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
            ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

          const connectDistance = (canvas.width / 7) * (canvas.height / 7);

          if (distance < connectDistance) {
            opacityValue = 1 - (distance / 20000);

            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - particles[a].x;
              const dy = mouse.y - particles[a].y;
              const mouseDist = Math.sqrt(dx * dx + dy * dy);

              if (mouseDist < mouse.radius + 50) {
                ctx.strokeStyle = `rgba(${theme.lineActive}, ${opacityValue * 0.8})`;
                ctx.lineWidth = 1.5;
              } else {
                ctx.strokeStyle = `rgba(${theme.lineBase}, ${opacityValue * 0.4})`;
                ctx.lineWidth = 0.8;
              }
            } else {
              ctx.strokeStyle = `rgba(${theme.lineBase}, ${opacityValue * 0.4})`;
              ctx.lineWidth = 0.8;
            }

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const theme = themeRef.current;

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(ctx, mouse, theme, canvas.width, canvas.height);
      }
      connect();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: isDark ? 0.8 : 0.6 }}
    />
  );
};

export default ParticleBackground;
