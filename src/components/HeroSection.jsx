import React from 'react';
import { 
  MapPin, 
  ArrowDown, 
  Star, 
  Phone, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>
    </svg>
  );
}

export default function HeroSection({ onNavigateToShop, onNavigateToVisit }) {
  return (
    <section className="relative overflow-hidden bg-backwater text-white">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.jpg" 
          alt="Midhula Farm Hut Kerala" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Copy, Actions & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>Chembuchira, Thrissur • Kerala's Ornamental &amp; Edible Fish Farm</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Healthy, Farm-Bred <span className="text-amber-300">Aquarium Fishes</span> Raised in Kerala
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              From vibrant Guppies, Cherry Shrimps, and Swordtails to Polar Blue Parrots, Jewel Cichlids, Platies, Kribensis, and Zebra Danios — acclimated naturally to Kerala water for hobbyists and bulk buyers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onNavigateToShop}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coral hover:bg-[#11562b] text-white font-semibold text-sm sm:text-base transition-colors shadow-lg active:scale-95"
              >
                <span>Explore Live Stock</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="https://www.instagram.com/midhula_farm_hut/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-medium transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-300" />
                <span>@midhula_farm_hut</span>
              </a>

              <a 
                href="https://www.youtube.com/@Midhula_Farm_Hut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-medium transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-red-400" />
                <span>YouTube Tours</span>
              </a>
            </div>

            {/* Grounded Trust Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 border-t border-white/15 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  <span>4.7</span>
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                </div>
                <div className="text-xs text-slate-300">120+ Local Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">90.3K+</div>
                <div className="text-xs text-slate-300">YouTube Subscribers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">24 Hrs</div>
                <div className="text-xs text-slate-300">Open Mon–Sun</div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Farm Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/40">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4 bg-slate-100">
                <img 
                  src="/images/spotlight.jpg" 
                  alt="Midhula Farm Hut Ponds" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-backwater/90 text-white text-xs font-semibold">
                  Nooluvally Farm
                </span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-serif font-bold text-lg text-backwater">
                    Direct Farm-to-Tank Stock
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Raised in natural Thrissur ponds &amp; glass racks with Moina live-feed culture. Retail pairs &amp; wholesale orders welcome.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <a 
                  href="tel:+918129120437" 
                  className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-lagoon"
                >
                  <Phone className="w-4 h-4 text-coral" />
                  <span>+91 81291 20437</span>
                </a>
                <button 
                  onClick={onNavigateToVisit}
                  className="font-semibold text-coral hover:underline"
                >
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
