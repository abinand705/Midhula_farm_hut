import React, { useState } from 'react';
import {
  Sparkles,
  Droplet,
  Thermometer,
  Heart,
  Package,
  HelpCircle
} from 'lucide-react';
import { SPECIES_DATA, evaluateCompatibility } from '../data/fishData';

export default function TankmateChecker() {
  const [fishA, setFishA] = useState('guppies');
  const [fishB, setFishB] = useState('shrimps');

  const result = evaluateCompatibility(fishA, fishB);

  return (
    <section id="compatibility" className="bg-sand/70 border-y border-[#E6E2D8] py-14 sm:py-20">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Interactive Tankmate Checker (7 cols on lg/xl) */}
          <div className="lg:col-span-7 xl:col-span-7 bg-white rounded-2xl p-6 sm:p-8 xl:p-10 border border-[#E6E2D8] shadow-sm">
            <div className="flex items-center gap-2.5 text-lagoon text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-coral" />
              <span>Interactive Tank Planner</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-backwater mt-1">
              Tankmate Compatibility Checker
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Select two species from our farm collection to evaluate temperament compatibility, minimal aquarium volume, and feeding dynamics under Kerala water conditions.
            </p>

            {/* Selectors */}
            <div className="grid sm:grid-cols-2 gap-5 mt-6">
              <div>
                <label htmlFor="fishASelect" className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Species A:
                </label>
                <select
                  id="fishASelect"
                  value={fishA}
                  onChange={(e) => setFishA(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-cream border border-[#DFDBD0] text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-lagoon/40 cursor-pointer shadow-xs"
                >
                  {SPECIES_DATA.map((fish) => (
                    <option key={fish.id} value={fish.id}>
                      {fish.name} ({fish.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="fishBSelect" className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Species B:
                </label>
                <select
                  id="fishBSelect"
                  value={fishB}
                  onChange={(e) => setFishB(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-cream border border-[#DFDBD0] text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-lagoon/40 cursor-pointer shadow-xs"
                >
                  {SPECIES_DATA.map((fish) => (
                    <option key={fish.id} value={fish.id}>
                      {fish.name} ({fish.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Evaluation Result Box */}
            {result && (
              <div className={`mt-6 rounded-2xl p-5 sm:p-6 border transition-all ${result.style}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-serif font-bold text-xl text-slate-900">
                    {result.status}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-slate-800 border border-black/10 shadow-xs">
                    Suggested Min Tank: {result.minVol}L+
                  </span>
                </div>
                <p className="text-sm sm:text-base mt-2.5 leading-relaxed opacity-95 text-slate-800">
                  {result.note}
                </p>
              </div>
            )}
          </div>

          {/* Kerala Care & Acclimatization Reference (5 cols on lg/xl) */}
          <div className="lg:col-span-5 xl:col-span-5 bg-white rounded-2xl p-6 sm:p-8 xl:p-10 border border-[#E6E2D8] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-lagoon">
              Aquarist Knowledge
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-backwater">
              Why Kerala Farm Stock Adapts Faster
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fishes bred in natural Thrissur well-water ponds develop resilient immune systems compared to delicate imported stocks.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream border border-[#E6E2D8]">
                <Droplet className="w-5 h-5 text-lagoon shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-backwater text-sm">Natural Well Water</div>
                  <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                    Maintained at neutral pH 6.8–7.4 with balanced natural minerals.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream border border-[#E6E2D8]">
                <Thermometer className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-backwater text-sm">Year-Round Tropical Temp</div>
                  <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                    Acclimated to ambient 24–29°C; no heaters needed for tropical community tanks.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream border border-[#E6E2D8]">
                <Heart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-backwater text-sm">Live Moina &amp; Artemia Feeding</div>
                  <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                    Nutrient-dense live cultures accelerate fry growth and fin development.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream border border-[#E6E2D8]">
                <Package className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-backwater text-sm">Oxygen Packing &amp; Transit Survival</div>
                  <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                    Heavy-duty polybags charged with medical oxygen for safe doorstep courier.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
