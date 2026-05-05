import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Phone, Menu, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 group cursor-pointer"
        >
          <span className="text-2xl font-black text-slate-900 tracking-tighter">OMEGA</span>
          <div className="bg-orange-500 text-white px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-lg shadow-orange-500/30 group-hover:bg-slate-900 transition-colors duration-300">
            <ShoppingBag size={18} />
            <span className="font-black text-sm tracking-tight uppercase">Net</span>
          </div>
        </motion.div>

        <div className="hidden md:flex flex-1 max-w-lg mx-12">
          <div className="relative w-full group">
            <input 
              type="text" 
              placeholder="Rechercher l'innovation..." 
              className="w-full bg-slate-100/80 border border-transparent rounded-2xl py-3 px-12 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-400 pointer-events-none">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assistance</span>
            <div className="flex items-center gap-1.5 text-slate-900 font-black text-sm hover:text-orange-600 transition-colors cursor-pointer">
              <Phone size={14} className="text-orange-500" />
              <span>31 420 566</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <motion.div whileHover={{ y: -2 }} className="p-2 text-slate-600 hover:text-orange-500 cursor-pointer transition-colors relative">
              <User size={22} />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="relative p-2.5 bg-slate-900 text-white rounded-2xl cursor-pointer shadow-xl shadow-slate-900/20 hover:bg-orange-500 transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-black shadow-lg">
                2
              </span>
            </motion.div>
            
            <div className="md:hidden p-2 text-slate-900">
              <Menu size={24} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}