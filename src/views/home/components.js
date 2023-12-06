import React from 'react'

export function Header () {

    return (
        <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo bg-slate-400">ARTELOCAL</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                <nav className="home-links">
                    <span>Home</span>
                    <span className="home-nav2 cursor-pointer">Sobre</span>
                    <span className="home-nav3">Produtos</span>
                    <span className="home-nav4">Artistas</span>
                    <span className="home-nav5">Contato</span>
                </nav>
                <div className="home-buttons">
                    <button className="home-login button">Login</button>
                    <button className="home-register button">Registre-se</button>
                </div>
            </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <span className="home-logo1">ARTELOCAL</span>
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-nav11">Home</span>
              <span className="home-nav21">About</span>
              <span className="home-nav31">Products</span>
              <span className="home-nav41">Artists</span>
              <span className="home-nav51">Contact</span>
            </nav>
            <div className="home-buttons1">
              <button className="home-login1 button">Login</button>
              <button className="home-register1 button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
            </svg>
          </div>
        </div>
      </header>
    )
}