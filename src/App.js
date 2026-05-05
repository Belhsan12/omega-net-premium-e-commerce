import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

export default function App() {
  const [category, setCategory] = useState('All');

  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(p => p.category === category);

  const categories = ['All', 'Smartphone', 'Smartwatch', 'Accessoires'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar setCategory={setCategory} activeCategory={category} />
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-semibold tracking-wider uppercase text-xs">
                <LayoutGrid size={14} />
                <span>Collection 2024</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                Découvrez nos <span className="text-orange-500">Produits</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    category === cat 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProductGrid products={filteredProducts} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}