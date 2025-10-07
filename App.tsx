
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SalonPage from './components/SalonPage';
import ShopPage from './components/ShopPage';
import VideoPage from './components/VideoPage';
import TryOnPage from './components/TryOnPage';
import OutfitGeneratorPage from './components/OutfitGeneratorPage';

export type Page = 'home' | 'salon' | 'video' | 'order' | 'profile' | 'shop' | 'try-on' | 'outfit-generator' | 'streetwear' | 'trending' | 'top-salons';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [tryOnProductImageUrl, setTryOnProductImageUrl] = useState<string | null>(null);

  const handleSelectProductForTryOn = (imageUrl: string) => {
    setTryOnProductImageUrl(imageUrl);
    setCurrentPage('try-on');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'salon':
      case 'top-salons':
        return <SalonPage />;
      case 'shop':
      case 'streetwear':
      case 'trending':
        return <ShopPage pageType={currentPage} onSelectProductForTryOn={handleSelectProductForTryOn} />;
      case 'video':
        return <VideoPage />;
      case 'try-on':
        return <TryOnPage setCurrentPage={setCurrentPage} productImageUrl={tryOnProductImageUrl} />;
      case 'outfit-generator':
        return <OutfitGeneratorPage setCurrentPage={setCurrentPage} />;
      case 'order':
      case 'profile':
        // Placeholder for Order and Profile pages
        return <div className="p-8 text-center"><h1 className="text-3xl font-bold">Coming Soon!</h1><p>This page is under construction.</p></div>;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16 pb-20">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;