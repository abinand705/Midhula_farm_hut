import React from 'react';
import { Fish, Phone, ExternalLink } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
    </svg>
  );
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-[#E6E2D8] bg-sand/60 py-10 text-center text-xs text-slate-600 px-4 sm:px-8">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-5">
        {/* Brand line */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-700">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-lagoon transition-colors"
          >
            Farm Story &amp; Overview
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('shop')}
            className="hover:text-lagoon transition-colors font-bold text-lagoon"
          >
            Live Stock Purchase
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('home', 'compatibility')}
            className="hover:text-lagoon transition-colors"
          >
            Tankmate Compatibility
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('home', 'visit')}
            className="hover:text-lagoon transition-colors"
          >
            Farm Location &amp; Directions
          </button>
        </div>

        {/* Socials & Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-1 text-xs sm:text-sm">
          <a
            href="https://www.instagram.com/midhula_farm_hut/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-pink-600 transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>@midhula_farm_hut</span>
          </a>

          <span>•</span>

          <a
            href="https://www.youtube.com/@Midhula_Farm_Hut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-red-600 transition-colors"
          >
            <YoutubeIcon className="w-4 h-4 text-red-600" />
            <span>YouTube (@Midhula_Farm_Hut)</span>
          </a>

          <span>•</span>

          <a
            href="tel:+918129120437"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-lagoon transition-colors"
          >
            <Phone className="w-4 h-4 text-coral" />
            <span>+91 81291 20437</span>
          </a>
        </div>

        {/* Copyright notice */}
        <p className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-[#DFDBD0]/70">
          Midhula Farm Hut • Nooluvally, Mupliyam - Chembuchira Road, Thrissur, Kerala (PIN: 680684) • Kerala's Ornamental &amp; Edible Fish Farm
        </p>
      </div>
    </footer>
  );
}
