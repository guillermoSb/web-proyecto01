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
          <div className="dropdown">
            <a href="#" className="link dropdown__header">
              Apps
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M6.293 8.793a1 1 0 0 1 1.32-.083l.094.083L12 13.085l4.293-4.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1 0-1.414z"></path>
              </svg>
            </a>
            <div className="dropdown__menu-container">
              <div className="dropdown__menu">
                <ul className="dropdown__list">
                  <li className="dropdown__option">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M5 12l.001.759c.004 1.316.038 2.037.326 2.603a3 3 0 0 0 1.311 1.311c.604.308 1.384.326 2.874.327H9.8h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.308-.604.326-1.384.327-2.874V12c.988.001 1.506.013 1.908.218a2 2 0 0 1 .874.874c.202.397.217.909.218 1.876V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.187-.367-.214-.831-.217-1.661v-4.494c.004-.83.031-1.294.217-1.661a2 2 0 0 1 .874-.874c.402-.205.92-.217 1.908-.218zm7-5a5 5 0 0 1 5 5 4.98 4.98 0 0 1-1 3.001h0-8A4.98 4.98 0 0 1 7 12a5 5 0 0 1 5-5zm0-5c2.209 0 4 1.741 4 3.889 0 .133-.007.264-.02.393a6.82 6.82 0 0 0-7.96-.003 3.83 3.83 0 0 1-.02-.39C8 3.741 9.791 2 12 2z"></path>
                    </svg>
                    Staking Portal
                  </li>
                  <li className="dropdown__option">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M9.996 3.999c.311.002.597.016.875.083a3 3 0 0 1 .867.359c.244.15.455.342.677.561l.998.997h4.732l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167A13.87 13.87 0 0 1 22 9.853v5.985l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.3.024-.651.029-1.049.03H5.854l-1.049-.03c-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V7.853l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296a13.84 13.84 0 0 1 1.049-.03h4.143zM12 9a3 3 0 0 0-3 3c0 .675.223 1.298.6 1.8-.971.73-1.6 1.892-1.6 3.2a1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0c0-1.309-.628-2.47-1.6-3.2.377-.501.6-1.125.6-1.8a3 3 0 0 0-3-3zm0 2a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"></path>
                    </svg>
                    Partner Portal
                  </li>
                  <li className="dropdown__option">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10.002 4.006c.549-.061.998.392.998.945h0v7a1 1 0 0 0 1 1h0 7c.552 0 1.006.449.944.998a9 9 0 0 1-5.5 7.317 9 9 0 0 1-9.808-1.951 9 9 0 0 1-1.951-9.808 9 9 0 0 1 7.317-5.5zM13.89 2l.108.006a9 9 0 0 1 5.366 2.581 9 9 0 0 1 1.951 2.92c.325.783.536 1.607.63 2.446.061.549-.392.998-.944.998h0-7a1 1 0 0 1-1-1h0v-7c0-.552.449-1.006.998-.945z"></path>
                    </svg>
                    Investor LP Portal
                  </li>
                  <li className="dropdown__option">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M18 12a1 1 0 0 1 1 1h0v3a2 2 0 0 1 2 2h0v1a2 2 0 0 1-2 2h0H5a2 2 0 0 1-2-2h0v-1a2 2 0 0 1 2-2h0v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 0 1 1-1zm-5.345-8.894l7 2.427A2 2 0 0 1 21 7.423V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.577a2 2 0 0 1 1.345-1.89l7-2.427a2 2 0 0 1 1.31 0z"></path>
                    </svg>
                    Bonding Portal
                  </li>
                  <li className="dropdown__option">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M22 16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h20zM18 4a4 4 0 0 1 4 4v6H2V8a4 4 0 0 1 4-4h12zM7 7H6a1 1 0 1 0 0 2h0 1a1 1 0 1 0 0-2h0zm11 0h-6a1 1 0 1 0 0 2h0 6a1 1 0 1 0 0-2h0z"></path>
                    </svg>
                    Buy 1Earth token
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
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

      <input type={"checkbox"} className="navbar__menu" />
      <div className="navbar__menu-full">
        <nav className="navbar__apps-menu">
          <span className="navbar__apps-title">Apps</span>
          <ul className="navbar__apps-list">
            <li className="navbar__app">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 12l.001.759c.004 1.316.038 2.037.326 2.603a3 3 0 0 0 1.311 1.311c.604.308 1.384.326 2.874.327H9.8h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.308-.604.326-1.384.327-2.874V12c.988.001 1.506.013 1.908.218a2 2 0 0 1 .874.874c.202.397.217.909.218 1.876V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.187-.367-.214-.831-.217-1.661v-4.494c.004-.83.031-1.294.217-1.661a2 2 0 0 1 .874-.874c.402-.205.92-.217 1.908-.218zm7-5a5 5 0 0 1 5 5 4.98 4.98 0 0 1-1 3.001h0-8A4.98 4.98 0 0 1 7 12a5 5 0 0 1 5-5zm0-5c2.209 0 4 1.741 4 3.889 0 .133-.007.264-.02.393a6.82 6.82 0 0 0-7.96-.003 3.83 3.83 0 0 1-.02-.39C8 3.741 9.791 2 12 2z"></path>
              </svg>
              Staking Portal
            </li>
            <li className="navbar__app">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M9.996 3.999c.311.002.597.016.875.083a3 3 0 0 1 .867.359c.244.15.455.342.677.561l.998.997h4.732l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167A13.87 13.87 0 0 1 22 9.853v5.985l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.3.024-.651.029-1.049.03H5.854l-1.049-.03c-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V7.853l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296a13.84 13.84 0 0 1 1.049-.03h4.143zM12 9a3 3 0 0 0-3 3c0 .675.223 1.298.6 1.8-.971.73-1.6 1.892-1.6 3.2a1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0c0-1.309-.628-2.47-1.6-3.2.377-.501.6-1.125.6-1.8a3 3 0 0 0-3-3zm0 2a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"></path>
              </svg>
              Partner Portal
            </li>
            <li className="navbar__app">
              {" "}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.002 4.006c.549-.061.998.392.998.945h0v7a1 1 0 0 0 1 1h0 7c.552 0 1.006.449.944.998a9 9 0 0 1-5.5 7.317 9 9 0 0 1-9.808-1.951 9 9 0 0 1-1.951-9.808 9 9 0 0 1 7.317-5.5zM13.89 2l.108.006a9 9 0 0 1 5.366 2.581 9 9 0 0 1 1.951 2.92c.325.783.536 1.607.63 2.446.061.549-.392.998-.944.998h0-7a1 1 0 0 1-1-1h0v-7c0-.552.449-1.006.998-.945z"></path>
              </svg>
              Investor LP Portal
            </li>
            <li className="navbar__app">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M18 12a1 1 0 0 1 1 1h0v3a2 2 0 0 1 2 2h0v1a2 2 0 0 1-2 2h0H5a2 2 0 0 1-2-2h0v-1a2 2 0 0 1 2-2h0v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 1 1 2 0h0v3h2v-3a1 1 0 0 1 1-1zm-5.345-8.894l7 2.427A2 2 0 0 1 21 7.423V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.577a2 2 0 0 1 1.345-1.89l7-2.427a2 2 0 0 1 1.31 0z"></path>
              </svg>
              Bonding Portal
            </li>
            <li className="navbar__app">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M22 16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h20zM18 4a4 4 0 0 1 4 4v6H2V8a4 4 0 0 1 4-4h12zM7 7H6a1 1 0 1 0 0 2h0 1a1 1 0 1 0 0-2h0zm11 0h-6a1 1 0 1 0 0 2h0 6a1 1 0 1 0 0-2h0z"></path>
              </svg>
              Buy 1Earth token
            </li>
          </ul>
        </nav>
        <ul className="navbar__responsive-options">
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
        <div className="navbar__responsive-links">
          <p className="text text--small text--grey">
            Need help? Connect with us
          </p>
          <div className="navbar__social-links">
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24" className="">
                <path d="M9.825 10.068c-.334.027-.646.18-.873.427a1.34 1.34 0 0 0-.353.906c0 .336.126.659.353.905a1.34 1.34 0 0 0 .873.427c.168-.006.334-.046.487-.116s.29-.171.405-.294a1.26 1.26 0 0 0 .26-.427 1.28 1.28 0 0 0 .076-.494 1.27 1.27 0 0 0-1.227-1.332zm4.38 0a1.34 1.34 0 0 0-.771.17c-.234.133-.422.333-.54.575s-.16.513-.122.78.157.514.34.712a1.34 1.34 0 0 0 .682.397 1.33 1.33 0 0 0 .787-.057 1.34 1.34 0 0 0 .618-.491c.152-.222.233-.485.233-.754a1.28 1.28 0 0 0-.334-.921 1.27 1.27 0 0 0-.404-.295 1.28 1.28 0 0 0-.486-.117h-.003zM20.04 0H3.96c-.324.001-.645.065-.944.19a2.46 2.46 0 0 0-.799.537 2.48 2.48 0 0 0-.532.802c-.123.299-.186.621-.185.945v16.221a2.47 2.47 0 0 0 .717 1.747 2.46 2.46 0 0 0 .799.537 2.45 2.45 0 0 0 .944.19h13.608l-.636-2.22 1.536 1.425 1.452 1.344L22.5 24V2.475a2.47 2.47 0 0 0-.184-.945 2.47 2.47 0 0 0-.532-.802 2.47 2.47 0 0 0-.799-.537 2.45 2.45 0 0 0-.944-.19h0zm-4.632 15.675l-.792-.975c.87-.203 1.641-.708 2.175-1.425a6.89 6.89 0 0 1-1.38.708 7.9 7.9 0 0 1-1.74.516c-1.028.189-2.082.185-3.108-.012a10.13 10.13 0 0 1-1.764-.516 7.2 7.2 0 0 1-1.374-.711 3.73 3.73 0 0 0 2.1 1.416l-.804.996a4.35 4.35 0 0 1-3.66-1.824 16.07 16.07 0 0 1 1.725-6.996 5.93 5.93 0 0 1 3.375-1.26l.12.144a8.09 8.09 0 0 0-3.156 1.572l.708-.348a9.01 9.01 0 0 1 2.727-.756 1.16 1.16 0 0 1 .204-.024c.804-.105 1.618-.113 2.424-.024A9.78 9.78 0 0 1 16.8 7.308c-.877-.714-1.895-1.233-2.988-1.524l.168-.192a5.93 5.93 0 0 1 3.375 1.26 16.07 16.07 0 0 1 1.725 6.996 4.38 4.38 0 0 1-1.609 1.369 4.39 4.39 0 0 1-2.063.458z"></path>
              </svg>
            </div>
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24" className="">
                <path d="M24 11.775a2.85 2.85 0 0 0-2.85-2.85c-.675 0-1.35.225-1.8.675-1.725-1.125-3.975-1.8-6.375-1.875L14.25 3.75l3.375.75c.075 1.275 1.125 2.25 2.4 2.25 1.35 0 2.4-1.05 2.4-2.4s-1.05-2.4-2.4-2.4c-.9 0-1.725.525-2.175 1.275l-3.975-.975a.67.67 0 0 0-.75.45L11.55 7.575c-2.55.075-5.025.75-6.9 1.875-.525-.375-1.125-.6-1.8-.6A2.85 2.85 0 0 0 0 11.7c0 .975.525 1.875 1.275 2.4 0 .225-.075.45-.075.675 0 2.025 1.125 3.825 3.225 5.175 2.025 1.35 4.65 2.025 7.5 2.025s5.475-.75 7.5-2.025c2.1-1.35 3.225-3.225 3.225-5.175 0-.225 0-.45-.075-.6.9-.45 1.425-1.35 1.425-2.4zm-3.975-8.55c.6 0 1.125.525 1.125 1.125s-.525 1.125-1.125 1.125S18.9 4.95 18.9 4.35s.525-1.125 1.125-1.125zm-13.2 10.35c0-.9.75-1.65 1.65-1.65s1.65.75 1.65 1.65-.75 1.65-1.65 1.65-1.65-.75-1.65-1.65zm9.15 4.8c-.825.825-2.1 1.275-3.975 1.275-1.8 0-3.075-.375-3.975-1.275-.225-.225-.225-.675 0-.9s.675-.225.9 0c.6.6 1.575.825 3 .825s2.4-.3 3-.825c.225-.225.675-.225.9 0 .375.225.375.6.15.9zm-.375-3.15c-.9 0-1.65-.75-1.65-1.65s.75-1.65 1.65-1.65 1.65.75 1.65 1.65-.75 1.65-1.65 1.65z"></path>
              </svg>
            </div>
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24" className="">
                <path d="M24.075 4.325c-.9.375-1.8.675-2.85.75 1.05-.6 1.8-1.575 2.175-2.7-.975.6-2.025.975-3.15 1.2C19.35 2.6 18.075 2 16.725 2c-2.7 0-4.95 2.175-4.95 4.95 0 .375.075.75.15 1.125C7.8 7.85 4.2 5.9 1.725 2.9a4.72 4.72 0 0 0-.675 2.475c0 1.725.9 3.225 2.175 4.125-.825 0-1.575-.225-2.25-.6v.075c0 2.4 1.725 4.35 3.975 4.8-.45.075-.825.15-1.275.15-.3 0-.6 0-.9-.075.6 1.95 2.475 3.375 4.575 3.45-1.65 1.35-3.825 2.1-6.15 2.1-.375 0-.825 0-1.2-.075 2.25 1.35 4.875 2.175 7.65 2.175 9.075 0 14.025-7.5 14.025-14.025v-.6c.9-.75 1.725-1.575 2.4-2.55z"></path>
              </svg>
            </div>
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24" classNmae="">
                <path d="M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0-3.291 5.7A3.8 3.8 0 0 0 12 15.8h0zM16.749.6h-9.5A6.66 6.66 0 0 0 .6 7.251v9.5A6.66 6.66 0 0 0 7.251 23.4h9.5a6.66 6.66 0 0 0 6.649-6.651v-9.5A6.66 6.66 0 0 0 16.749.6zM12 17.7A5.71 5.71 0 0 1 6.3 12 5.71 5.71 0 0 1 12 6.3a5.71 5.71 0 0 1 5.7 5.7 5.71 5.71 0 0 1-5.7 5.7zm6.65-11.4a.95.95 0 0 1 0-1.9.95.95 0 1 1 0 1.9z"></path>
              </svg>
            </div>
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M23.602 2.034a1.8 1.8 0 0 0-.944.068S1.63 9.659.43 10.496c-.259.18-.346.284-.389.408-.208.595.439.858.439.858l5.42 1.766a.6.6 0 0 0 .274-.017l13.05-8.07c.101-.031.176 0 .16.075-.264.905-9.911 9.478-9.964 9.53a.2.2 0 0 0-.059.079c-.013.031-.018.064-.016.098l-.504 5.288s-.211 1.65 1.435 0c1.168-1.169 2.288-2.137 2.85-2.607 1.864 1.286 3.869 2.709 4.734 3.45a1.5 1.5 0 0 0 1.098.424c.825-.031 1.05-.934 1.05-.934s3.831-15.416 3.96-17.483c.012-.203.029-.332.031-.471.007-.161-.009-.322-.047-.478-.04-.179-.173-.324-.35-.378z"></path>
              </svg>
            </div>
            <div className="navbar__link">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M9.347 23.25V13.5H6V9h3.347V5.857c0-3.423 2.167-5.107 5.221-5.107 1.463 0 2.72.109 3.086.158v3.577l-2.118.001c-1.661 0-2.036.789-2.036 1.947V9H18l-1.5 4.5h-3v9.75H9.347z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
