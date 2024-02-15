import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Price from './Price';
import Team from './Team';
import Products from './Parteners';
import Forms from './Form';
// import Login from './Login';
import About from './about';

function Home() {
  return (
    <div>
    <HeroSection />
    <Services />
    <Price />
    <Team />
    <Products />
    <Forms />
    <About />
    
    
    </div>
  )
}

export default Home