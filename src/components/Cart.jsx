import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Cart() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
          <ShoppingCart className="h-6 w-6" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Your Cart</h1>
        <p className="mt-3 text-white/70">Your cart is currently empty. Start shopping to add items.</p>
        <a href="/shop" className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">Go to Shop</a>
      </div>
    </section>
  );
}
