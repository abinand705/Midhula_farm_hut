import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FarmStory from './components/FarmStory';
import FishCatalogPage from './components/FishCatalogPage';
import TankmateChecker from './components/TankmateChecker';
import LocationSection from './components/LocationSection';
import FishDetailModal from './components/FishDetailModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CheckCircle } from 'lucide-react';

export default function App() {
  // Navigation: 'home' = Farm Overview & Features, 'shop' = Fish Catalog & Purchase Page
  const [currentPage, setCurrentPage] = useState('home');

  // Inquiry Bag State
  const [bag, setBag] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Active Fish Details Modal State
  const [selectedFish, setSelectedFish] = useState(null);

  // Toast Notification State
  const [toastText, setToastText] = useState(null);

  const showToast = (text) => {
    setToastText(text);
    setTimeout(() => {
      setToastText(null);
    }, 3000);
  };

  const handleAddToBag = (fish) => {
    setBag((prev) => {
      const existing = prev.find((item) => item.fish.id === fish.id);
      if (existing) {
        return prev.map((item) =>
          item.fish.id === fish.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { fish, qty: 1, packType: 'Pairs (1M+1F)' }];
    });
    showToast(`Added ${fish.name} to inquiry bag!`);
  };

  const handleUpdateQty = (fishId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(fishId);
      return;
    }
    setBag((prev) =>
      prev.map((item) =>
        item.fish.id === fishId ? { ...item, qty: newQty } : item
      )
    );
  };

  const handleUpdatePack = (fishId, newPackType) => {
    setBag((prev) =>
      prev.map((item) =>
        item.fish.id === fishId ? { ...item, packType: newPackType } : item
      )
    );
  };

  const handleRemoveItem = (fishId) => {
    setBag((prev) => prev.filter((item) => item.fish.id !== fishId));
  };

  const handleClearBag = () => {
    setBag([]);
  };

  const totalBagCount = bag.reduce((acc, item) => acc + item.qty, 0);

  const navigateToShop = () => {
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (anchorId = null) => {
    setCurrentPage('home');
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
    <div className="min-h-screen bg-cream text-[#1A2421] flex flex-col antialiased selection:bg-lagoon selection:text-white">
      {/* Toast Notification matching midhula_farm_hut.html */}
      {toastText && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] px-4 py-2.5 rounded-xl bg-backwater text-white text-sm font-medium shadow-lg flex items-center gap-2 animate-fade-in border border-white/20">
          <CheckCircle className="w-4 h-4 text-emerald-300" />
          <span>{toastText}</span>
        </div>
      )}

      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        bagCount={totalBagCount}
        setIsBagOpen={setIsBagOpen}
      />

      {/* Main Content Area */}
      <main id="top" className="flex-1">
        {currentPage === 'home' ? (
          // PAGE 1: Information and features of the farm
          <div className="animate-fade-in">
            {/* Hero Section */}
            <HeroSection
              onNavigateToShop={navigateToShop}
              onNavigateToVisit={() => navigateToHome('visit')}
            />

            {/* Farm Story & Heritage Features */}
            <FarmStory
              onNavigateToShop={navigateToShop}
            />

            {/* In-page Live Stock Collection Preview */}
            <FishCatalogPage
              onNavigateHome={() => navigateToHome()}
              onSelectFish={(fish) => setSelectedFish(fish)}
              onAddToBag={handleAddToBag}
            />

            {/* Interactive Tankmate Compatibility Checker */}
            <TankmateChecker />

            {/* Visit & Contact Information */}
            <LocationSection
              onOpenBag={() => setIsBagOpen(true)}
            />
          </div>
        ) : (
          // PAGE 2: Dedicated Live Stock Purchase Page
          <div className="animate-fade-in bg-cream min-h-screen">
            <FishCatalogPage
              onNavigateHome={() => navigateToHome()}
              onSelectFish={(fish) => setSelectedFish(fish)}
              onAddToBag={handleAddToBag}
            />
            <TankmateChecker />
          </div>
        )}
      </main>

      {/* Global Modals & Drawers */}
      <FishDetailModal
        fish={selectedFish}
        onClose={() => setSelectedFish(null)}
        onAddToBag={handleAddToBag}
      />

      <CartDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        bag={bag}
        onUpdateQty={handleUpdateQty}
        onUpdatePack={handleUpdatePack}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
        onShowToast={showToast}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateToHome} />
    </div>
  );
}
