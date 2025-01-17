// Utilities
import React from "react";
import {getCharacters} from "@/ api";

// Styles
import "./styles.scss";

// Content
import Logo from "@/assets/images/logo.png";

// Components
import BaseImage from "@/components/_ui-kit/BaseImage";

const getData = async () => {
  await getCharacters();
};

const AppHeader: React.FC = () => {
  const logo = Logo as string;

  return (
    <header className="app-header">
      <div className="app-header__container">
        <div className="app-header__logo">
          <BaseImage
            src={logo}
          />
        </div>

        <nav className="app-header__nav">
          <ul className="app-header__nav-list">
            <li onClick={getData}>Characters</li>
            <li>Planets</li>
            <li>Episodes</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;