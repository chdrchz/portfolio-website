import React from "react";
import Typing from "./header-typing.jsx";

import "../../../styles/header.css";

import Dropdown from "./nav-dropdown.jsx";

import { Bodoni_Moda } from '@next/font/google';

const bodoni = Bodoni_Moda({
  weight: ['400', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you need
});

export default function Header() {
  return (
    <div className="header">
      <div className="header-name">
        <h1 className={bodoni.className}>SAVANNA</h1>
      </div>
      <div className="header-nav">
        <div className="header-nav_menu">
          <div className="header-nav_animation">
            <Typing />
          </div>
        </div>
      </div>
      <Dropdown />
    </div>
  );
}
