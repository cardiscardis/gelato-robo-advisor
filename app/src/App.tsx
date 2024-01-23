import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import CtaComponent from './components/cta/Cta';
// import CtaComponent2 from './components/Cta1';
import CtaComponent0 from './components/cta/Cta0';
// import CtaComponent4 from './components/Cta4';
import JumbWithCards from './components/Jumb';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CtaComponent0 />
      <CtaComponent />
      <CtaComponent left={true} />
      <JumbWithCards />
      <Footer />
    </>    
  )
}
