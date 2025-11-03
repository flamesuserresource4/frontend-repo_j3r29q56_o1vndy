import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import Footer from './components/Footer.jsx';
import Shop from './components/Shop.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import ProductDetail from './components/ProductDetail.jsx';

function Home() {
  return (
    <>
      <Hero />
      <ProductPreview />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-600/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<div className="mx-auto max-w-5xl px-6 py-16"><h1 className="text-2xl font-bold">Page not found</h1><p className="mt-2 text-white/70">The page you’re looking for doesn’t exist.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
