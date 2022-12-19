import React from "react";
import { Link } from "react-router-dom";
import computer from "../img/computer.jpg";
import portImg from "../img/port-img.jpg";
import skillsPic from "../img/undraw_static_assets_rpm6.svg";
import cryptograph from "../img/cryptograph.png";
import thePantry from "../img/ThePantryPortfolioImg.png";
import expenseTracker from "../img/expenseTracker.png";
import blogImg from "../img/blog-img.jpg";

function MainContent() {
  return (
    <div>
      {/* <!-- hero --> */}
      <main className='text-light pb-5'>
        <div className='pt-5'>
          <div className='container h-100'>
            <div className='row'>
              <div className='col-md-7 pb-3 d-flex justify-content-center'>
                <img
                  src={portImg}
                  alt=''
                  className='img-fluid w-75 rounded-circle opacity-75'
                />
              </div>
              <div className='col-md-5 bg-dark rounded bg-dark bg-opacity-75 pb-3 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mt-3'>Have We Met?</h1>
                <h3 className='mt-5'>Let's get to know each other!</h3>
                <p className='mt-5 fs-5'>
                  My name is David Harris and I'm a full stack web developer and
                  freelancer.
                </p>
                <p>
                  Take a look around and take the time to get to know me. Below
                  I've listed my proudest achievements, current skills, and a
                  way to get in touch with me if you would like to get to know
                  me further or potentially hire me!
                </p>
                <a href='#contact'>
                  <button
                    type='button'
                    className='btn btn-primary my-3 fw-bold'
                  >
                    I'm Interested!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- about --> */}
      <section>
        <div className='bg-black' id='about'>
          <div className='container p-5 text-white'>
            <div className='row'>
              <div className='col-md-7'>
                <h1 className='p-3 text-secondary'>About Me</h1>
                <p className='fs-5'>
                  All of my life I have been skilled with computers. A few years
                  ago, coding and development grabbed my attention and I have
                  been hooked ever since.
                </p>
                <p className='fs-5'>
                  Despite having a full-time job that has nothing to do with
                  coding, every day I spend several hours of my free time
                  coding. Totalling up to 50 hours a week.
                </p>
                <p className='fs-5'>
                  Programming to me is not only an immensely interesting hobby,
                  but is something that I am willing to spend a life-time
                  mastering.
                </p>
                <p className='fs-5'>
                  If you are currently looking for an employee that is deeply
                  passionate about development, is willing to still continue to
                  learn outside of working hours, and has a burning desire to
                  become a master of the field, <br />{" "}
                  <span className='fw-bold text-danger fs-5'>
                    look no further.
                  </span>
                </p>
              </div>
              <div className='col-md-5'>
                <img src={computer} alt='' className='img-fluid rounded' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- projects --> */}
      <section>
        <div className='my-5' id='projects'>
          <div className='container'>
            <div className='row text-center'>
              <h1>My Portfolio</h1>
            </div>
            <div className='card-group row mt-5'>
              <div className='card border-secondary pt-2 mx-2'>
                <img src={cryptograph} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title text-center fs-4 text-light'>
                    CryptoGraph
                  </h5>
                  <p className='card-text fs-5'>
                    A simple app that displays the top 20 crypto-currencies by
                    market cap. Then displays the last 10 days in prices on a
                    line graph.
                  </p>
                  <div className='container d-flex align-items-center mt-5 pt-4'>
                    <a
                      href='https://github.com/dlogoh/CryptoGraph'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='text-secondary'
                    >
                      <i className='fa-brands fa-3x fa-square-github' />
                    </a>
                    <a
                      href='https://thriving-panda-f0b5d6.netlify.app/'
                      className='btn btn-dark m-3'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className='card-text'>
                    <small className='text-danger'>
                      Project is not responsive on mobile.
                    </small>
                  </p>
                </div>
              </div>
              <div className='card bg-dark border-secondary mx-2'>
                <img
                  src={`${thePantry}`}
                  className='card-img-top pt-3'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title text-center mt-5 text-light fs-4'>
                    The Pantry
                  </h5>
                  <p className='card-text fs-5'>
                    A website where users can store their favorite recipes
                  </p>
                  <p className='card-text text-light'>
                    Work in progress... currently working on back-end.
                  </p>
                  <div className='container d-flex align-items-center mt-5 pt-4'>
                    <a
                      href='https://github.com/dlogoh/thepantry'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='text-secondary'
                    >
                      <i className='fa-brands fa-3x fa-square-github' />
                    </a>
                    <a
                      href='https://benevolent-sunflower-124d04.netlify.app/'
                      className='btn btn-dark m-3'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className='card-text'>
                    <small className='text-muted'></small>
                  </p>
                </div>
              </div>
              <div className='card border-secondary mx-2'>
                <img
                  src={`${expenseTracker}`}
                  className='card-img-top pt-3'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title text-center fs-4 text-light'>
                    Expense Tracker
                  </h5>
                  <p className='card-text fs-5'>
                    A simple CRUD app that let's users track their expenses.
                  </p>
                  <p className='card-text fs-6'>
                    Made with vanilla JS, this app demonstrates the basic
                    principles of CRUD. Expenses are stored in local storage.
                  </p>
                  <div className='container d-flex align-items-center'>
                    <a
                      href='https://github.com/dlogoh/expense-tracker'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='text-secondary'
                    >
                      <i className='fa-brands fa-3x fa-square-github' />
                    </a>
                    <a
                      href='https://exquisite-praline-cc0955.netlify.app/'
                      className='btn btn-dark m-3'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className='card-text'>
                    <small className='text-muted'></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ border: "#333 2px solid" }} />
      {/* <!-- Blog --> */}
      <section
        id='blog'
        className='container d-flex flex-column justify-content-center align-items-center my-5'
      >
        <h3 className='mb-3'>Blog Coming Soon!</h3>
        <img src={`${blogImg}`} alt='blog' className='img-fluid rounded' />
        <Link to='/blog' className='text-white link '>
          <button className='btn btn-primary mt-4'>Visit Blog</button>
        </Link>
      </section>
      {/* <!-- skills --> */}
      <section>
        <div className='bg-black' id='skills'>
          <div className='container p-5 text-white'>
            <div className='row'>
              <div className='col-md-5'>
                <img src={skillsPic} alt='' className='img-fluid' />
              </div>
              <div className='col-md-7 px-5'>
                <h1 className='text-secondary'>My Skills</h1>
                <hr />
                <p className='fs-5'>
                  HTML | CSS | SCSS | JavaScript | React.js | Redux | BootStrap
                  | Python | Git | Node.js | Postman | RESTful APIs |
                  Object-Oriented Programming{" "}
                </p>
                <hr />
                <p className='fs-5'>
                  The skills that I possess are mostly from being self-taught.
                  Having spent several years altogether learning on my own.
                  However, I have completed a few classes in college that helped
                  excel my learning.
                </p>
                <p className='fs-5'>
                  These include front-end languages, back-end frameworks, and
                  other useful tools.{" "}
                </p>
                <p className='fs-5'>
                  I also completed classes that focused on networking, computer
                  hardware, and others that have helped build my CS foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
