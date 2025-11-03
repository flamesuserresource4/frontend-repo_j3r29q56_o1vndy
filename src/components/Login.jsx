import React from 'react';

export default function Login() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-md px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sign in</h1>
        <p className="mt-2 text-white/70">Access your account to track orders and manage details.</p>
        <form className="mt-8 space-y-4">
          <input type="email" required className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Email address" />
          <input type="password" required className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Password" />
          <button className="w-full rounded-md bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">Sign in</button>
          <p className="text-sm text-white/60">No account? <a className="text-white hover:underline" href="#">Create one</a></p>
        </form>
      </div>
    </section>
  );
}
