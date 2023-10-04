import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-light" href="#" style={{marginLeft: "250px"}}>Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="navbar-nav ms-auto" style={{marginRight: "250px"}}>
            <a className="nav-link text-light" href="#">Features</a>
            <a className="nav-link text-secondary"  href="#">Pricing</a>
            <a className="nav-link text-secondary">Disabled</a>
            <a className="nav-link text-secondary">Disabled</a>
          </div>
      </nav>
  )
}

export default Navbar;