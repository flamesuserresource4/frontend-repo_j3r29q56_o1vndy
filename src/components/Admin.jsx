import React from 'react';
import { Package, Users, ShoppingBag } from 'lucide-react';

export default function Admin() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="mt-2 text-white/70">Quick overview of your store metrics.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'Products', value: '128', Icon: Package },
            { title: 'Customers', value: '2,341', Icon: Users },
            { title: 'Orders', value: '674', Icon: ShoppingBag },
          ].map(({ title, value, Icon }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">{title}</p>
                  <p className="mt-1 text-2xl font-bold">{value}</p>
                </div>
                <div className="rounded-md bg-white/10 p-3"><Icon className="h-6 w-6" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
