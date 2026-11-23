import React from 'react';
import { X, PlusCircle } from 'lucide-react';

export default function FishDetailModal({ fish, onClose, onAddToBag }) {
  if (!fish) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E6E2D8] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
        <div className="relative aspect-[4/3] bg-sand">
          <img 
            src={fish.image} 
            alt={fish.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/images/hero.jpg';
            }}
          />
          <button 
            type="button" 
            onClick={onClose}
            aria-label="Close details" 
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lagoon">
                {fish.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-backwater">
                {fish.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {fish.subtitle}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sand text-backwater shrink-0">
              {fish.temperament}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {fish.desc}
          </p>

          {/* 3-column stats box */}
          <div className="grid grid-cols-3 gap-2.5 text-center bg-cream rounded-xl p-3 border border-[#E6E2D8]">
            <div>
              <div className="text-[11px] text-slate-500 uppercase font-semibold">Min Tank</div>
              <div className="text-sm font-bold text-backwater mt-0.5">{fish.tank}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 uppercase font-semibold">Temp</div>
              <div className="text-sm font-bold text-backwater mt-0.5">{fish.temp}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 uppercase font-semibold">Care Level</div>
              <div className="text-sm font-bold text-backwater mt-0.5">{fish.level}</div>
            </div>
          </div>

          {/* Farm Care Note */}
          <div className="text-xs text-slate-600 bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-3 leading-relaxed">
            <strong className="text-lagoon">Farm Care Note:</strong> {fish.care}
          </div>

          {/* Price & Action Button */}
          <div className="pt-2">
            <button 
              type="button" 
              onClick={() => {
                onAddToBag(fish);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-coral hover:bg-[#11562b] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add to Inquiry Bag • ₹{fish.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
