'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AISystemHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(11, 16, 32, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw(ctx);

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1020]">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'pulse-slow 8s ease-in-out infinite'
        }} />
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-30 animate-scan" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#00D9FF]/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-[#00D9FF]/20 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#00D9FF]/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[128px] opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0088FF] rounded-full filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* System Status */}
          <div className={`flex items-center justify-center space-x-4 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center space-x-2 px-4 py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
              <span className="text-[#00D9FF] text-sm font-mono">SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-white/60 text-sm font-mono">AI CORE v3.0</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`text-center space-y-6 mb-12 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] via-[#0088FF] to-[#00D9FF] blur-xl opacity-50" />
                <span className="relative bg-gradient-to-r from-[#00D9FF] via-[#0088FF] to-[#00D9FF] bg-clip-text text-transparent animate-pulse">
                  Astrology
                </span>
              </span>
            </h1>

            {/* Glitch Text Effect */}
            <div className="relative inline-block">
              <div className="absolute inset-0 opacity-70">
                <p className="text-xl sm:text-2xl md:text-3xl text-[#00D9FF] font-mono">
                  &gt; ASTROLOGY_2019.EXE
                </p>
              </div>
              <p className="relative text-xl sm:text-2xl md:text-3xl text-[#00D9FF] font-mono animate-glitch">
                &gt; ASTROLOGY_2019.EXE
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white/5 backdrop-blur-md border border-[#00D9FF]/20 rounded-2xl p-8">
              <div className="space-y-4 font-mono">
                <div className="flex items-start space-x-3">
                  <span className="text-[#00D9FF] flex-shrink-0">&gt;</span>
                  <p className="text-white/90 text-lg">
                    国内SNSに特化した生成AI
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#00D9FF] flex-shrink-0">&gt;</span>
                  <p className="text-white/90 text-lg">
                    企業様向け経営コンサルティング
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            <Link 
              href="/services"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-full border-2 border-[#00D9FF]/50 overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-[#00D9FF] hover:shadow-lg hover:shadow-[#00D9FF]/30"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>サービス一覧</span>
              </span>
            </Link>
          </div>

          {/* Stats/Features */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {[
              { label: 'AI CORE', value: 'ACTIVE', color: '#00D9FF' },
              { label: 'STATUS', value: 'ONLINE', color: '#06C755' },
              { label: 'MODE', value: 'PRODUCTION', color: '#00D9FF' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#00D9FF]/30 transition-all duration-300"
              >
                <div className="text-white/60 text-sm font-mono mb-2">{stat.label}</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stat.color }} />
                  <div className="text-2xl font-bold font-mono" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-[#00D9FF]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
