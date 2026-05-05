import React from 'react';
import { Battery, Camera, Smartphone, Cpu, ShoppingCart, Eye, Heart, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-3 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] h-full flex flex-col"
    >
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
          <Heart size={18} />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
          <Eye size={18} />
        </button>
      </div>

      <div className={`relative h-72 rounded-[2rem] overflow-hidden ${product.bgColor} transition-colors duration-500 group-hover:bg-slate-50`}>
        {product.isNew && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg">
              NOUVEAU
            </span>
          </div>
        )}

        <motion.img 
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-8 mix-blend-multiply drop-shadow-2xl transition-transform duration-500"
        />

        {product.oldPrice && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          </div>
        )}
      </div>

      <div className="p-5 pt-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">{product.label}</span>
          <div className="flex items-center gap-1">
            <Truck size={12} className="text-slate-400" />
            <span className="text-[10px] font-bold text-slate-400">LIVRAISON 24H</span>
          </div>
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
            {product.specs}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {product.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500">
              <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:shadow-sm group-hover:text-orange-500 transition-all">
                {i === 0 ? <Camera size={14} /> : <Cpu size={14} />}
              </div>
              <span className="text-[10px] font-bold uppercase leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs font-bold text-slate-400 line-through mb-0.5">
                {product.oldPrice} DT
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">{product.price}</span>
              <span className="text-sm font-black text-slate-400">DT</span>
            </div>
          </div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-colors shadow-xl shadow-slate-900/10 group-hover:shadow-orange-500/20"
          >
            <ShoppingCart size={22} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}