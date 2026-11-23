import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowLeft, 
  PlusCircle, 
  Info, 
  SlidersHorizontal, 
  Check, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { SPECIES_DATA, CATEGORIES, TEMPERAMENTS } from '../data/fishData';

export default function FishCatalogPage({ 
  onNavigateHome, 
  onSelectFish, 
  onAddToBag 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemperament, setSelectedTemperament] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecies = useMemo(() => {
    return SPECIES_DATA.filter((fish) => {
      // Category filter
      if (selectedCategory !== 'All' && fish.category !== selectedCategory) {
        return false;
      }

      // Temperament filter
      if (selectedTemperament !== 'All' && fish.temperament !== selectedTemperament) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = fish.name.toLowerCase().includes(query);
        const matchesSubtitle = fish.subtitle.toLowerCase().includes(query);
        const matchesMalayalam = fish.malayalamName ? fish.malayalamName.toLowerCase().includes(query) : false;
        const matchesDesc = fish.desc.toLowerCase().includes(query);
        const matchesCare = fish.care.toLowerCase().includes(query);
        const matchesTank = fish.tank.toLowerCase().includes(query);
        if (!matchesName && !matchesSubtitle && !matchesMalayalam && !matchesDesc && !matchesCare && !matchesTank) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTemperament, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedTemperament('All');
    setSearchQuery('');
  };

  const getWhatsAppLink = (fish) => {
    const text = encodeURIComponent(
      `Hello Midhula Farm Hut! I want to enquire about ${fish.name} (${fish.subtitle}) - ₹${fish.price} / ${fish.unit}. Is this available for delivery or pickup?`
    );
    return `https://wa.me/918129120437?text=${text}`;
  };

  return (
    <section id="collection" className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-16">
      {/* Top Breadcrumb & Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-lagoon hover:text-backwater mb-3 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Return to Farm Story &amp; Overview</span>
          </button>
          <span className="block text-xs font-bold uppercase tracking-wider text-lagoon">
            Our Breeding Stock
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-backwater mt-1">
            Aquarium Fishes &amp; Shrimps
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Browse our popular farm-bred varieties. Add species to your Inquiry Bag to request current pair or wholesale pricing directly from the farm.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search species, temperament..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DFDBD0] bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lagoon/40"
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? 'font-semibold bg-backwater text-white shadow-sm'
                    : 'font-medium bg-white border border-[#DFDBD0] text-slate-700 hover:border-lagoon'
                }`}
              >
                {cat === 'All' ? 'All Species' : cat}
              </button>
            );
          })}
        </div>

        {/* Temperament Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <label htmlFor="temperamentFilter" className="text-xs font-semibold text-slate-600">
            Care / Temperament:
          </label>
          <select
            id="temperamentFilter"
            value={selectedTemperament}
            onChange={(e) => setSelectedTemperament(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-[#DFDBD0] text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lagoon/40 cursor-pointer"
          >
            {TEMPERAMENTS.map((temp) => (
              <option key={temp} value={temp}>
                {temp === 'All' ? 'All Temperaments' : temp}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Species Grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredSpecies.map((fish) => (
            <div
              key={fish.id}
              className="bg-white rounded-2xl border border-[#E6E2D8] overflow-hidden card-hover flex flex-col justify-between"
            >
              <div>
                {/* Photo & Overlays */}
                <div className="relative aspect-[4/3] bg-sand overflow-hidden">
                  <img
                    src={fish.image}
                    alt={fish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-backwater/80 backdrop-blur-sm text-white">
                    {fish.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-backwater">
                    {fish.temperament}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-backwater">
                        {fish.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {fish.subtitle}
                      </p>
                      {fish.malayalamName && (
                        <p className="text-[11px] text-coral font-semibold mt-0.5 font-sans">
                          {fish.malayalamName}
                        </p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-lagoon font-serif block">
                        ₹{fish.price}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {fish.unit}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {fish.desc}
                  </p>

                  {/* Quick specs strip */}
                  <div className="flex items-center gap-2 mt-4 text-[11px] text-slate-600">
                    <span className="px-2 py-0.5 rounded-md bg-sand font-medium">
                      Tank: {fish.tank}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-sand font-medium">
                      Temp: {fish.temp}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-sand font-medium truncate">
                      {fish.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-12 gap-2">
                <button
                  type="button"
                  onClick={() => onSelectFish(fish)}
                  className="col-span-4 py-2.5 rounded-xl border border-[#DFDBD0] hover:border-lagoon text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <Info className="w-3.5 h-3.5 text-slate-500" />
                  <span>Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onAddToBag(fish)}
                  className="col-span-6 py-2.5 rounded-xl bg-coral hover:bg-[#11562b] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>+ Add to Bag</span>
                </button>

                <a
                  href={getWhatsAppLink(fish)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center justify-center transition-colors"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-14 px-4 bg-white rounded-2xl border border-[#E6E2D8]">
          <h3 className="font-serif text-lg font-bold text-backwater">
            No matching species found
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Try clearing your search or switching category filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-backwater text-white text-sm font-medium hover:bg-lagoon transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
