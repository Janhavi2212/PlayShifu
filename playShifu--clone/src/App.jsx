import React from 'react';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Breadcrumb from './components/Breadcrumb';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import Features from './components/Features';
import ProductGuide from './components/ProductGuide';
import BoxContents from './components/BoxContents';
import Footer from './components/Footer';
import AboutProduct from './components/AboutProduct';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PromoBanner />
      <Header />
      <Navigation />
      <Breadcrumb />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProductGallery />
          <ProductInfo />
        </div>
        <AboutProduct/>
        <Features />
        <ProductGuide />
        <BoxContents />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;