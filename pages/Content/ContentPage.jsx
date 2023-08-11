import About from '@/components/About/About';
import Cards from '@/components/Cards/Cards';
import Des from '@/components/Des/Des';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info';
import React from 'react';

const ContentPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <About/>
      <Des/>
     <Info/> 
     <Footer/>
    </div>
  );
};

export default ContentPage;