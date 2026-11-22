import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Navigation,
  ExternalLink
} from 'lucide-react';

export default function LocationSection({ onOpenBag }) {
  return (
    <section id="visit" className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
      <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-10 lg:p-12 xl:p-14 shadow-sm">
        <div className="grid md:grid-cols-3 gap-8 xl:gap-12 items-start">
          {/* Column 1: Address & Location */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-lagoon">
              Visit the Farm
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-backwater mt-1">
              Midhula Farm Hut
            </h2>
            <p className="text-xs text-coral font-semibold mt-1">
              മിധുല ഫാം ഹട്ട് • ചെമ്പൂചിറ, തൃശ്ശൂർ
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Nooluvally, Mupliyam - Chembuchira Road,<br />
              Chembuchira, Thrissur District,<br />
              Kerala - 680684, India
            </p>

            <div className="mt-5">
              <a
                href="https://www.google.com/maps/search/Midhula+Farm+Hut+Chembuchira+Thrissur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-coral hover:underline"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps Directions →</span>
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact & Hours */}
          <div className="space-y-4 text-sm sm:text-base">
            <div className="font-serif font-bold text-lg text-backwater">Direct Contact</div>

            <a
              href="tel:+918129120437"
              className="flex items-center gap-2.5 text-slate-700 hover:text-lagoon font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-coral" />
              <span>+91 81291 20437</span>
            </a>

            <a
              href="tel:+918606428768"
              className="flex items-center gap-2.5 text-slate-700 hover:text-lagoon font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-coral" />
              <span>+91 86064 28768</span>
            </a>

            <div className="flex items-start gap-2.5 text-slate-600 pt-1 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-lagoon shrink-0 mt-0.5" />
              <span>Monday – Sunday: Open 24 Hours listing (Call ahead for walkthroughs)</span>
            </div>
          </div>

          {/* Column 3: Ready to Order or Enquire */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="font-serif font-bold text-lg text-backwater">
                Ready to Order or Enquire?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Build your species list in the Inquiry Bag and copy a formatted message for WhatsApp or phone enquiry directly with the breeder.
              </p>
            </div>
            <button
              onClick={onOpenBag}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-backwater hover:bg-lagoon text-white text-sm sm:text-base font-semibold transition-colors shadow-sm active:scale-95"
              style={{ backgroundColor: '#0B3B3C', color: '#FFFFFF' }}
            >
              <ShoppingBag className="w-4 h-4 text-coral" />
              <span>Open Inquiry Bag</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
