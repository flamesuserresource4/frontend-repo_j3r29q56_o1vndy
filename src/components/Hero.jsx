import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden" id="home">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/40 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          New Season • Trending Now
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Elevate Your Everyday Style
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-sm sm:text-base">
          Discover premium fashion, curated for comfort and performance. Secure checkout, fast delivery, and modern design in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/shop" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
