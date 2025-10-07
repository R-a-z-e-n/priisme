
import React from 'react';
import { trendingProducts, salonServices } from '../services/mockData';
import type { Page } from '../App';
import { Product } from '../types';
import { CameraIcon, SparklesIcon } from './IconComponents';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const ProductCard: React.FC<{product: Product}> = ({ product }) => (
    <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-12 p-4 md:p-8">
      {/* Main Action Buttons */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <button onClick={() => setCurrentPage('salon')} className="p-4 bg-rose-100 rounded-lg shadow hover:bg-rose-200 transition-colors">
          <h2 className="font-bold text-rose-800">Salons</h2>
        </button>
        <button onClick={() => setCurrentPage('shop')} className="p-4 bg-violet-100 rounded-lg shadow hover:bg-violet-200 transition-colors">
          <h2 className="font-bold text-violet-800">Shop</h2>
        </button>
        <button onClick={() => setCurrentPage('try-on')} className="p-4 bg-sky-100 rounded-lg shadow hover:bg-sky-200 transition-colors flex flex-col items-center">
          <CameraIcon className="h-6 w-6 text-sky-800 mb-1" />
          <h2 className="font-bold text-sky-800">Try Now</h2>
        </button>
        <button className="p-4 bg-teal-100 rounded-lg shadow hover:bg-teal-200 transition-colors">
          <h2 className="font-bold text-teal-800">AR</h2>
        </button>
      </section>

      {/* Trending Now */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {trendingProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Popular Salon Services */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {salonServices.map(service => (
            <div key={service.name} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
              <service.icon className="h-10 w-10 text-rose-500 mb-2" />
              <span className="font-semibold">{service.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* AI Outfit Generator */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-8 rounded-lg text-white text-center">
        <SparklesIcon className="h-12 w-12 mx-auto mb-2" />
        <h2 className="text-3xl font-bold mb-2">AI Outfit Generator</h2>
        <p className="mb-4">Get personalized style suggestions from our AI.</p>
        <button onClick={() => setCurrentPage('outfit-generator')} className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
          Generate Style
        </button>
      </section>
    </div>
  );
};

export default HomePage;