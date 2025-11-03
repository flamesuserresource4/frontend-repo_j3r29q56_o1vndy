import React from 'react';
import ProductPreview from './ProductPreview.jsx';

export default function Shop() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Shop</h1>
          <p className="mt-2 text-white/70">Browse our full collection of modern essentials.</p>
        </div>
      </div>
      <ProductPreview />
    </section>
  );
}
