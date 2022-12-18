import React from "react";

function Navbar() {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 py-4'>
        <div className='container'>
          <a className='navbar-brand text-light fs-2' href='#home'>
            David Harris
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto fs-5'>
              <li className='nav-item mx-2'>
                <a className='nav-link active' aria-current='page' href='#home'>
                  Home
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a href='#blog' className='nav-link text-secondary'>
                  Blog
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#skills'>
                  Skills
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
