import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-orange-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/20 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-600 px-4 py-2 rounded-2xl text-xs font-black tracking-widest mb-8 border border-orange-200/50"
          >
            <Zap size={14} className="fill-orange-600" />
            NOUVEAUTÉ EXCLUSIVE
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
            Le Futur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              Redmi 15
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 mb-10 max-w-lg font-medium leading-relaxed">
            Vivez une expérience mobile sans précédent avec le nouveau Redmi 15. 
            Puissance brute, design élégant et une batterie qui défie le temps.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="flex flex-col">
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">À partir de</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-black text-slate-900 tracking-tighter">679</span>
                 <span className="text-xl font-black text-slate-400">DT</span>
               </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-orange-500">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-slate-500">+1.2k avis clients</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-slate-900 text-white px-8 py-5 rounded-2xl text-lg font-black hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-95">
              Acheter Maintenant
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-5 rounded-2xl text-lg font-black hover:border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center">
              En savoir plus
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-400/20 blur-[120px] rounded-full animate-pulse" />
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800" 
              alt="Redmi 15"
              className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protection</div>
              <div className="text-sm font-black text-slate-900">Garantie 1 An</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -left-8 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 z-20 flex items-center gap-4"
          >
             <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Zap size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Batterie</div>
              <div className="text-sm font-black text-slate-900">7000 mAh</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}