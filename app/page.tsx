
'use client';

import Hero from '../components/Hero';
import BusinessOverview from '../components/BusinessOverview';
import Strengths from '../components/Strengths';
import Services from '../components/Services';
import Achievements from '../components/Achievements';
import Operations from '../components/Operations';
import Areas from '../components/Areas';
import Message from '../components/Message';
import Company from '../components/Company';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BusinessOverview />
        <Strengths />
        <Services />
        <Achievements />
        <Operations />
        <Areas />
        <Message />
        <Company />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
