import React from "react";

function Footer() {
  return (
    <section>
      <nav className='navbar justify-content-center sticky-bottom bg-black mt-5 text-white'>
        <div className='d-flex align-items-center'>
          Copyright &copy; David Harris
          <div className='container d-flex justify-content-end'>
            <a href='https://www.linkedin.com/in/dlogoh/'>
              <i className='fa-brands fa-2x fa-linkedin px-5' />
            </a>
            <a href='https://github.com/dlogoh'>
              <i className='fa-brands fa-2x fa-square-github' />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Footer;
