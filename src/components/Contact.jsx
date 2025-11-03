import React from 'react';

export default function Contact() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-white/70">We'd love to hear from you. Send us a message and our team will get back shortly.</p>
        <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Your name" />
          <input type="email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Email address" />
          <input className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Subject" />
          <textarea rows="5" className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Your message"></textarea>
          <div className="sm:col-span-2">
            <button className="rounded-md bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
