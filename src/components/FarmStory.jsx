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
    <section id="about" className="py-14 sm:py-20 bg-cream">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-lagoon">
              About Midhula Farm Hut
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-backwater leading-tight">
              Aquaculture Rooted in Thrissur's Freshwater Heritage
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Located along the Mupliyam–Chembuchira corridor in Nooluvally, Midhula Farm Hut has developed into a dedicated hub for ornamental fish breeding, aquatic plants, and live feed cultures.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our tanks and outdoor mud ponds use natural mineral-rich well water, ensuring that every fish is acclimatized for high vitality, resistance to common parasites, and seamless transition to home aquariums.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateToShop}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-backwater hover:bg-lagoon text-white font-semibold text-sm transition-colors shadow-sm active:scale-95"
              >
                <span>Browse All Fishes for Purchase</span>
                <ArrowRight className="w-4 h-4 text-coral" />
              </button>
            </div>
          </div>

          {/* Right 4-Grid Feature Pillars (5 cols) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-backwater/10 flex items-center justify-center text-backwater mb-3">
                <Fish className="w-5 h-5 text-coral" />
              </div>
              <div className="font-bold text-base text-backwater">Farm-to-Tank</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct breeder pricing for single pairs to pet-shop wholesale lots without middlemen markups.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-lagoon mb-3">
                <ShieldCheck className="w-5 h-5 text-lagoon" />
              </div>
              <div className="font-bold text-base text-backwater">Transparent Sourcing</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clean lineage stock with no hormone coloring or artificial treatments.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center text-lime-700 mb-3">
                <Sprout className="w-5 h-5 text-lime-700" />
              </div>
              <div className="font-bold text-base text-backwater">Natural Feeding</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                Daily live Moina, Daphnia &amp; balanced farm nutrition cultivate vibrant natural pigmentation.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center text-coral mb-3">
                <Clock className="w-5 h-5 text-coral" />
              </div>
              <div className="font-bold text-base text-backwater">Open Daily</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                24-hour listing; call ahead for personal farm walkthroughs and breeding pair selection.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
