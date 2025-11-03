import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-neutral-950" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
              <span className="text-lg font-semibold">BlueCart</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Premium shopping experience with secure payments and global delivery.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#about">About Us</a></li>
              <li><a className="hover:text-white" href="#careers">Careers</a></li>
              <li><a className="hover:text-white" href="#blog">Blog</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#support">Support</a></li>
              <li><a className="hover:text-white" href="#shipping">Shipping</a></li>
              <li><a className="hover:text-white" href="#returns">Returns</a></li>
              <li><a className="hover:text-white" href="#tracking">Order Tracking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="mt-3 text-sm text-white/70">Join our newsletter for exclusive offers.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60 px-3"
              />
              <button className="rounded-md bg-blue-600 px-4 font-semibold hover:bg-blue-500">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} BlueCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
