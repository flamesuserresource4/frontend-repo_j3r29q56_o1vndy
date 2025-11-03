import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Aero Knit Sneakers', price: 129, rating: 4.8, color: 'from-blue-500 to-indigo-600', tag: 'New' },
  { id: 2, name: 'CloudFlex Hoodie', price: 89, rating: 4.6, color: 'from-rose-500 to-orange-500', tag: 'Trending' },
  { id: 3, name: 'Essential Tee Pack', price: 59, rating: 4.7, color: 'from-emerald-500 to-cyan-500', tag: 'Best Seller' },
  { id: 4, name: 'HyperRun Shorts', price: 49, rating: 4.5, color: 'from-violet-500 to-fuchsia-500', tag: 'Limited' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => String(p.id) === id);

  if (!product) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-2 text-white/70">This item may be unavailable or moved.</p>
          <Link to="/shop" className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">Back to Shop</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className={`h-80 w-full rounded-xl bg-gradient-to-br ${product.color}`} />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-amber-400">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-white/80">{product.rating}</span>
          </div>
          <p className="mt-4 text-2xl font-bold">${product.price}</p>
          <div className="mt-6 flex items-center gap-2">
            {['S','M','L','XL'].map(s => (
              <button key={s} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm hover:bg-white/10">{s}</button>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/cart" className="rounded-md bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">Add to Cart</Link>
            <Link to="/shop" className="rounded-md border border-white/15 bg-white/5 px-5 py-2 font-semibold hover:bg-white/10">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
