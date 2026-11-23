import React, { useState } from 'react';
import { 
  Fish, 
  ShoppingBag, 
  Menu, 
  X, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  bagCount, 
  setIsBagOpen 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (page, anchorId = null) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-[#E6E2D8]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button 
          onClick={() => navTo('home')} 
          className="flex items-center gap-3 min-w-0 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-backwater text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Fish className="w-5 h-5 text-coral -rotate-12 group-hover:rotate-0 transition-transform" />
          </div>
          <div className="truncate">
            <span className="block font-serif font-bold text-lg text-backwater leading-tight truncate">
              Midhula Farm Hut
            </span>
            <span className="block text-xs text-slate-600 truncate">
              Nooluvally, Thrissur • Kerala
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <button 
            onClick={() => navTo('shop')} 
            className={`transition-colors whitespace-nowrap ${
              currentPage === 'shop' ? 'text-lagoon font-bold' : 'hover:text-lagoon'
            }`}
          >
            Live Stock (Purchase)
          </button>
          <button 
            onClick={() => navTo('home', 'compatibility')} 
            className="hover:text-lagoon transition-colors whitespace-nowrap"
          >
            Tankmate Check
          </button>
          <button 
            onClick={() => navTo('home', 'about')} 
            className={`transition-colors whitespace-nowrap ${
              currentPage === 'home' ? 'text-backwater font-semibold' : 'hover:text-lagoon'
            }`}
          >
            Farm Story
          </button>
          <button 
            onClick={() => navTo('home', 'visit')} 
            className="hover:text-lagoon transition-colors whitespace-nowrap"
          >
            Visit &amp; Contact
          </button>
        </nav>

        {/* Action Buttons: Inquiry Bag & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button 
            onClick={() => setIsBagOpen(true)}
            type="button" 
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-backwater hover:bg-lagoon text-white text-sm font-medium transition-colors shadow-sm active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Inquiry Bag</span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-coral text-white text-xs font-bold">
              {bagCount}
            </span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            type="button" 
            aria-label="Toggle Menu" 
            className="md:hidden p-2 rounded-xl border border-[#E6E2D8] bg-white text-backwater"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E2D8] bg-cream px-4 py-3 space-y-2 text-sm font-medium animate-fade-in">
          <button 
            onClick={() => navTo('shop')} 
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand text-slate-800 flex items-center justify-between"
          >
            <span>🐠 Live Stock (Purchase)</span>
            <span className="text-xs text-lagoon font-bold">Catalogue</span>
          </button>
          <button 
            onClick={() => navTo('home', 'compatibility')} 
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand text-slate-800"
          >
            ✨ Tankmate Check
          </button>
          <button 
            onClick={() => navTo('home', 'about')} 
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand text-slate-800"
          >
            🌿 Farm Story
          </button>
          <button 
            onClick={() => navTo('home', 'visit')} 
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand text-slate-800"
          >
            📍 Visit &amp; Contact
          </button>
        </div>
      )}
    </header>
  );
}
