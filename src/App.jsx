import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-600/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  );
}
