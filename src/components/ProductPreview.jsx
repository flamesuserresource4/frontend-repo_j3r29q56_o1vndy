import React from 'react';
import { Star, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Aero Knit Sneakers',
    price: 129,
    rating: 4.8,
    color: 'from-blue-500 to-indigo-600',
    tag: 'New',
  },
  {
    id: 2,
    name: 'CloudFlex Hoodie',
    price: 89,
    rating: 4.6,
    color: 'from-rose-500 to-orange-500',
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Essential Tee Pack',
    price: 59,
    rating: 4.7,
    color: 'from-emerald-500 to-cyan-500',
    tag: 'Best Seller',
  },
  {
    id: 4,
    name: 'HyperRun Shorts',
    price: 49,
    rating: 4.5,
    color: 'from-violet-500 to-fuchsia-500',
    tag: 'Limited',
  },
];

export default function ProductPreview() {
  return (
    <section id="shop" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Discover our picks</h2>
            <p className="mt-2 text-white/70">Modern essentials with premium materials and sleek silhouettes.</p>
          </div>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative flex-1 md:w-80">
              <input
                type="text"
                placeholder="Search products"
                className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60 py-2.5 pl-9 pr-3 text-sm"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
            <div className="hidden sm:flex items-center gap-2">
              {['All', 'Men', 'Women', 'Accessories'].map((f) => (
                <button
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-0.5"
            >
              <Link to={`/product/${p.id}`} className="block rounded-[11px] bg-neutral-950 p-3">
                <div className={`relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br ${p.color}`}>
                  <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold tracking-tight line-clamp-1">{p.name}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs text-white/80">{p.rating}</span>
                    </div>
                    <p className="text-sm font-bold">${p.price}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    {['S', 'M', 'L'].map((s) => (
                      <span key={s} className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-xs text-white/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <Link to="/cart" className="mx-3 mb-3 block rounded-md bg-blue-600 py-2 text-center text-sm font-semibold hover:bg-blue-500 transition">Add to Cart</Link>

              {/* Hover shine */}
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.25), rgba(147,51,234,0.15), rgba(59,130,246,0.25))' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
