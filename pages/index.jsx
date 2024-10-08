import React from 'react';

import About from '../src/app/components/about.jsx';
import Header from "../src/app/components/header.jsx";

import { Montserrat } from '@next/font/google';

import "../styles/index.css";
import "../styles/global.css";

import Contact from '@/app/components/contact.jsx';
import Portfolio from '@/app/components/portfolio.jsx';

const montserrat = Montserrat({
  weight: ['400', '700'],  // You can specify weights like 400 (regular) or 700 (bold)
  subsets: ['latin'],      // Specify the subsets you need (e.g., 'latin')
});

export default function Index() {
    return (
      <div className={`${montserrat.className} main-container`}>
        <Header />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }