import React from 'react';
import { ShoppingCart, User, Search, Home, Store, Info, Phone, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-lg">BlueCart</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link to="/" className="hover:text-white inline-flex items-center gap-2"><Home className="h-4 w-4" /> Home</Link>
            <Link to="/shop" className="hover:text-white inline-flex items-center gap-2"><Store className="h-4 w-4" /> Shop</Link>
            <Link to="/about" className="hover:text-white inline-flex items-center gap-2"><Info className="h-4 w-4" /> About</Link>
            <Link to="/contact" className="hover:text-white inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Contact</Link>
            <Link to="/admin" className="hover:text-white inline-flex items-center gap-2"><LayoutDashboard className="h-4 w-4" /> Admin</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-48 lg:w-64 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60 py-2 pl-9 pr-3 text-sm"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </div>
            <Link to="/cart" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
