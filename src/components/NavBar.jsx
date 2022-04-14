import React from "react";
import Logo from "../../assets/earthfund.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        <img src={Logo} alt="EarthFund Logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="118"
          height="16"
          fill="#1d354f"
          viewBox="0 0 118 16"
        >
          <path d="M0 13.861h8.525v-2.595H3.22V9.228h4.888V6.633H3.22V4.595h5.328V2H0v11.861zm15.265 0l.683-2.27h3.915l.683 2.27h3.475L20.107 2h-4.402L11.79 13.861h3.475zm1.413-4.68l1.181-3.915h.093l1.181 3.915h-2.456zm10.525 4.68h3.22V9.946h1.112l2.085 3.915h3.498l-2.409-4.425c1.262-.608 2.015-1.761 2.015-3.405C36.724 3.506 34.958 2 32.322 2h-5.12v11.861zm3.22-6.417V4.571h1.135c1.129 0 1.807.44 1.807 1.459s-.678 1.413-1.807 1.413h-1.135zm9.388-2.849h3.568v9.266h3.174V4.595h3.568V2h-10.31v2.595zm13.559 9.266h3.22V9.228h4.263v4.633h3.22V2h-3.22v4.633H56.59V2h-3.22v11.861zm14.27 0h3.22V9.228h4.61V6.633h-4.61V4.595h5.12V2h-8.34v11.861zM86.223 2v7.32c0 1.106-.793 1.9-1.9 1.9s-1.9-.793-1.9-1.9V2h-3.22v7.598c0 2.71 2.05 4.402 5.12 4.402 3.046 0 5.12-1.691 5.12-4.402V2h-3.22zm17.051 0h-3.22v6.209h-.093L95.745 2h-2.734v11.861h3.22V7.629h.069l4.286 6.232h2.687V2zm8.126 11.861c3.614 0 5.907-2.224 5.907-5.93S115.014 2 111.353 2h-4.517v11.861h4.564zm-1.344-2.734V4.734h1.135c1.853 0 2.873.718 2.873 3.197s-1.02 3.197-2.78 3.197h-1.228z"></path>
        </svg>
      </a>
      <ul className="navbar__options">
        <li className="navbar__option">
          <a href="#" className="link">
            Causes
          </a>
        </li>
        <li className="navbar__option">
          <a href="#" className="link">
            DAO
          </a>
        </li>
        <li className="navbar__option">
          <a href="#" className="link">
            Technology
          </a>
        </li>
        <li className="navbar__option">
          <a href="#" className="link">
            Token
          </a>
        </li>
        <li className="navbar__option">
          <a href="#" className="link">
            Contributors
          </a>
        </li>
      </ul>
      <div className="navbar__button">
        <button className="button button--small">Buy 1Earth token</button>
      </div>
    </nav>
  );
}

export default NavBar;
