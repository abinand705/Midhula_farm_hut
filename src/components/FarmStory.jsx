import React from 'react';
import {
  Fish,
  ShieldCheck,
  Sprout,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function FarmStory({ onNavigateToShop }) {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-cream">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Text Column (6 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lagoon">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>About Midhula Farm Hut</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-backwater leading-[1.15]">
              Aquaculture Rooted in Thrissur's Freshwater Heritage
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Located along the scenic Mupliyam–Chembuchira corridor in Nooluvally, Midhula Farm Hut has developed into a dedicated hub for ornamental fish breeding, aquatic plants, and live feed cultures.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our open mud ponds and specialized glass racks use natural mineral-rich well water, ensuring that every fish is acclimatized for high vitality, strong parasite resistance, and seamless transition to home aquariums.
            </p>

            <div className="pt-3">
              <button
                onClick={onNavigateToShop}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-backwater hover:bg-lagoon text-white font-semibold text-sm sm:text-base transition-colors shadow-md active:scale-95"
                style={{ backgroundColor: '#0B3B3C', color: '#FFFFFF' }}
              >
                <span>Browse All Fishes for Purchase</span>
                <ArrowRight className="w-4 h-4 text-coral" />
              </button>
            </div>
          </div>

          {/* Right 4-Grid Feature Pillars (6 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-6 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-backwater/10 flex items-center justify-center text-backwater mb-4">
                <Fish className="w-6 h-6 text-coral" />
              </div>
              <div className="font-serif font-bold text-lg sm:text-xl text-backwater">Farm-to-Tank</div>
              <div className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Direct breeder pricing for single pairs to pet-shop wholesale lots without middlemen markups.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-lagoon mb-4">
                <ShieldCheck className="w-6 h-6 text-lagoon" />
              </div>
              <div className="font-serif font-bold text-lg sm:text-xl text-backwater">Transparent Sourcing</div>
              <div className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Clean lineage stock with no hormone coloring, synthetic additives, or artificial treatments.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center text-lime-700 mb-4">
                <Sprout className="w-6 h-6 text-lime-700" />
              </div>
              <div className="font-serif font-bold text-lg sm:text-xl text-backwater">Natural Live Feeding</div>
              <div className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Daily live Moina, Daphnia &amp; balanced farm nutrition cultivate vibrant natural pigmentation.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral mb-4">
                <Clock className="w-6 h-6 text-coral" />
              </div>
              <div className="font-serif font-bold text-lg sm:text-xl text-backwater">Open Daily 24 Hours</div>
              <div className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                24-hour listing; call ahead for personal farm walkthroughs and breeding pair selection.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
