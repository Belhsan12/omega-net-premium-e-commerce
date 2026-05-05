import React from 'react';
import { Phone, Globe, Facebook, Instagram, Mail, MapPin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black tracking-tighter">OMEGA</span>
              <div className="bg-orange-500 text-white px-2.5 py-1 rounded-xl">
                <span className="font-black text-sm uppercase">Net</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Leader de l'innovation technologique en Tunisie. Nous offrons une sélection rigoureuse des meilleurs gadgets avec un service client d'exception.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <div key={i} className="w-11 h-11 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer group shadow-xl">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight">Collections</h4>
            <ul className="space-y-4">
              {['Smartphones Pro', 'Montres Elite', 'Audio Premium', 'Nouveautés', 'Promotions'].map(item => (
                <li key={item} className="text-slate-400 text-sm font-bold hover:text-orange-500 cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight">Service Client</h4>
            <ul className="space-y-4">
              {['Livraison Express', 'Suivi de commande', 'Service Après-Vente', 'Conditions de Garantie', 'FAQ'].map(item => (
                <li key={item} className="text-slate-400 text-sm font-bold hover:text-orange-500 cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800/50">
            <h4 className="font-black text-lg mb-8 tracking-tight text-white">Nous contacter</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Siège Social</span>
                  <span className="text-sm font-bold">Tunis, Tunisie</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Téléphone</span>
                  <span className="text-sm font-bold">+216 31 420 566</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</span>
                  <span className="text-sm font-bold">hello@omeganet.tn</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-xs font-bold">© 2024 OMEGA NET. CONÇU POUR L'EXCELLENCE.</p>
          <div className="flex items-center gap-8 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <div className="flex items-center gap-1 font-black text-[10px] text-white">
               <Globe size={12} />
               <span>TN / FR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}