import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Copy, 
  Phone, 
  ShoppingBag, 
  CheckCircle,
  MessageCircle 
} from 'lucide-react';
import { PACK_OPTIONS } from '../data/fishData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  bag, 
  onUpdateQty, 
  onUpdatePack, 
  onRemoveItem, 
  onClearBag,
  onShowToast 
}) {
  const [buyerName, setBuyerName] = useState('');
  const [buyerDistrict, setBuyerDistrict] = useState('');

  if (!isOpen) return null;

  // Build the formatted inquiry preview
  const buildInquiryText = () => {
    if (bag.length === 0) return '';
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const lines = [
      `*STOCK INQUIRY — MIDHULA FARM HUT (KERALA)*`,
      `Date: ${dateStr}`,
      `Buyer: ${buyerName.trim() || 'Aquarium Hobbyist / Trader'}`,
      `Location: ${buyerDistrict.trim() || 'Kerala, India'}`,
      '',
      `*Requested Species List:*`
    ];

    let estimatedTotal = 0;
    bag.forEach((item, idx) => {
      const itemSubtotal = item.fish.price * item.qty;
      estimatedTotal += itemSubtotal;
      lines.push(`${idx + 1}. ${item.fish.name} — Qty: ${item.qty} (${item.packType || 'Pairs (1M+1F)'}) [Est. ₹${itemSubtotal}]`);
    });

    lines.push('');
    lines.push(`*Estimated Order Value:* ₹${estimatedTotal}`);
    lines.push(`Please confirm current pair/wholesale stock availability, courier packaging options to my location, and UPI payment details.`);
    lines.push(`Thank you!`);

    return lines.join('\n');
  };

  const inquiryText = buildInquiryText();

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(inquiryText)
        .then(() => onShowToast('Inquiry message copied!'))
        .catch(() => fallbackCopy(inquiryText));
    } else {
      fallbackCopy(inquiryText);
    }
  };

  const fallbackCopy = (text) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      onShowToast('Inquiry message copied!');
    } catch (err) {}
    document.body.removeChild(ta);
  };

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(inquiryText);
    window.open(`https://wa.me/918129120437?text=${encoded}`, '_blank');
    onShowToast('Opened WhatsApp with inquiry message!');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-[#E6E2D8] flex items-center justify-between bg-cream">
          <div>
            <h3 className="font-serif text-xl font-bold text-backwater">
              Stock Inquiry Bag
            </h3>
            <p className="text-xs text-slate-600">
              Select pairs or bulk lots to enquire with Midhula Farm Hut
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            aria-label="Close bag" 
            className="p-2 rounded-xl hover:bg-sand text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {bag.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-sand flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8 text-backwater/40" />
              </div>
              <h4 className="font-serif text-lg font-bold text-backwater">
                Your inquiry bag is empty
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Explore our live stock to add fancy guppies, shrimps, cichlids, or zebras.
              </p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {bag.map((item) => (
                  <div 
                    key={item.fish.id}
                    className="p-3.5 rounded-2xl bg-cream border border-[#E6E2D8] space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.fish.image} 
                        alt={item.fish.name} 
                        className="w-14 h-14 rounded-xl object-cover border border-[#DFDBD0] bg-sand shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero.jpg';
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-backwater truncate">
                          {item.fish.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">
                          {item.fish.subtitle}
                        </p>
                        <div className="text-xs font-black text-lagoon mt-0.5">
                          ₹{item.fish.price * item.qty}
                          <span className="text-[10px] text-slate-500 font-normal ml-1">
                            (₹{item.fish.price} / {item.fish.unit})
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white border border-[#DFDBD0] rounded-lg p-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.fish.id, item.qty - 1)}
                          className="p-1 hover:text-coral text-slate-500 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1 text-backwater">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.fish.id, item.qty + 1)}
                          className="p-1 hover:text-lagoon text-slate-500 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.fish.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Pack Size Selector */}
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E6E2D8]/60">
                      <span className="text-slate-500 font-medium">Pack Option:</span>
                      <select
                        value={item.packType || 'Pairs (1M+1F)'}
                        onChange={(e) => onUpdatePack(item.fish.id, e.target.value)}
                        className="px-2 py-1 rounded-lg bg-white border border-[#DFDBD0] text-xs font-medium text-slate-700 focus:outline-none cursor-pointer"
                      >
                        {PACK_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buyer Form Section */}
              <div className="space-y-4 pt-4 border-t border-[#E6E2D8]">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="buyerName" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      id="buyerName" 
                      type="text" 
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="e.g. Arun" 
                      className="w-full px-3 py-2 rounded-xl border border-[#DFDBD0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lagoon/40" 
                    />
                  </div>
                  <div>
                    <label htmlFor="buyerDistrict" className="block text-xs font-semibold text-slate-700 mb-1">
                      District / Town
                    </label>
                    <input 
                      id="buyerDistrict" 
                      type="text" 
                      value={buyerDistrict}
                      onChange={(e) => setBuyerDistrict(e.target.value)}
                      placeholder="e.g. Thrissur" 
                      className="w-full px-3 py-2 rounded-xl border border-[#DFDBD0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lagoon/40" 
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                    <span>Formatted Inquiry Message</span>
                    <span className="text-[10px] text-lagoon font-bold">Ready for WhatsApp / SMS</span>
                  </div>
                  <pre className="bg-cream border border-[#E6E2D8] rounded-xl p-3 text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed max-h-48 overflow-y-auto">
                    {inquiryText}
                  </pre>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {bag.length > 0 && (
          <div className="p-5 border-t border-[#E6E2D8] bg-cream space-y-2.5">
            {/* Primary WhatsApp Action */}
            <button 
              type="button" 
              onClick={handleWhatsAppSend}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp (+91 81291 20437)</span>
            </button>

            {/* Secondary Copy Button */}
            <button 
              type="button" 
              onClick={handleCopy}
              className="w-full py-2.5 rounded-xl bg-backwater hover:bg-lagoon text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Inquiry Message</span>
            </button>

            {/* Direct Call & Clear Bag */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a 
                href="tel:+918129120437" 
                className="py-2 rounded-xl bg-white border border-[#DFDBD0] hover:border-lagoon text-backwater font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-coral" />
                <span>Call Farm</span>
              </a>
              <button 
                type="button" 
                onClick={onClearBag}
                className="py-2 rounded-xl bg-white border border-[#DFDBD0] hover:border-red-300 text-slate-600 hover:text-red-600 font-semibold text-xs transition-colors"
              >
                Clear Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
