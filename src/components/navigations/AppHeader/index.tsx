// Utilities
import React from "react";

// Styles
import "./styles.scss";

// Content
import Logo from "@/assets/images/logo.png";

// Components
import BaseImage from "@/components/_ui-kit/BaseImage";

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
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;