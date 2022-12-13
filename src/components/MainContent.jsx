import React from "react";
import hero from "../img/undraw_feeling_proud_qne1.svg";
import aboutPic from "../img/undraw_developer_activity_re_39tg.svg";
import skillsPic from "../img/undraw_static_assets_rpm6.svg";
import cryptograph from "../img/cryptograph.png";
import thePantry from "../img/ThePantryPortfolioImg.png";
import expenseTracker from "../img/expenseTracker.png";

function MainContent() {
  return (
    <div>
      {/* <!-- hero --> */}
      <main>
        <div className='my-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <img src={hero} alt='' className='img-fluid' />
              </div>
              <div className='col-md-5'>
                <h1>Have We Met?</h1>
                <h3 className='mt-5'>Lets get to know each other!</h3>
                <p className='mt-5'>
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
                    className='btn btn-primary mt-5 fw-bold'
                  >
                    I'm Interested!
                  </button>
                  <button className='btn btn-secondary mt-5 ms-3'>
                    Here2Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- about --> */}
      <section>
        <div className='bg-dark' id='about'>
          <div className='container p-5 text-white'>
            <div className='row'>
              <div className='col-md-7'>
                <h1 className='p-3'>About Me</h1>
                <p>
                  All of my life I have been skilled with computers. A few years
                  ago, coding and development grabbed my attention and I have
                  been hooked ever since.
                </p>
                <p>
                  Despite having a full-time job that has nothing to do with
                  coding, every day I spend several hours of my free time not
                  only learning to code, but enjoying it. Totalling up to 35
                  hours a week.
                </p>
                <p>
                  Programming to me is not only an immensly interesting hobby,
                  but is something that I am willing to spend a life-time
                  mastering.
                </p>
                <p>
                  If you are currently looking for an employee that is deeply
                  passionate about development, is willing to still continue to
                  learn outside of working hours, and has a burning desire to
                  become a master of the field, <br />{" "}
                  <span className='fw-bold' style={{ color: "#DC143C" }}>
                    look no further.
                  </span>
                </p>
              </div>
              <div className='col-md-5'>
                <img src={aboutPic} alt='' className='img-fluid' />
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
              <div className='card pt-2'>
                <img src={cryptograph} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>CryptoGraph</h5>
                  <p className='card-text'>
                    A simple app that displays the top 20 crypto-currencies by
                    market cap. Then displays the last 10 days in prices on a
                    line graph.
                  </p>
                  <div className='container d-flex justify-center align-items-center'>
                    <a
                      href='https://github.com/dlogoh/CryptoGraph'
                      target='_blank'
                      rel='noreferrer noopener'
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
              <div className='card bg-dark'>
                <img
                  src={`${thePantry}`}
                  className='card-img-top pt-3'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-5 text-white'>
                    A website where users can store their favorite recipes
                  </h5>
                  <p className='card-text text-white'>
                    Work in progress... currently working on back-end.
                  </p>
                  <div className='container d-flex justify-center align-items-center'>
                    <a
                      href='https://github.com/dlogoh/thepantry'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <i className='fa-brands fa-3x fa-square-github' />
                    </a>
                    <a
                      href='https://benevolent-sunflower-124d04.netlify.app/'
                      className='btn btn-light m-3'
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
              <div className='card'>
                <img
                  src={`${expenseTracker}`}
                  className='card-img-top pt-3'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    A simple CRUD app that let's users track their expenses.
                  </h5>
                  <p className='card-text'>
                    Made with vanilla JS, this app demonstrates the basic
                    principles of CRUD. Expenses are stored in local storage.
                  </p>
                  <div className='container d-flex justify-center align-items-center'>
                    <a
                      href='https://github.com/dlogoh/expense-tracker'
                      target='_blank'
                      rel='noreferrer noopener'
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
      {/* <!-- skills --> */}
      <section>
        <div className='bg-dark' id='skills'>
          <div className='container p-5 text-white'>
            <div className='row'>
              <div className='col-md-5'>
                <img src={skillsPic} alt='' className='img-fluid' />
              </div>
              <div className='col-md-7 px-5'>
                <h1>My Skills</h1>
                <hr />
                <p>
                  HTML | CSS | SCSS | JavaScript | React.js | Redux | BootStrap
                  | Python | PHP | Git | Node.js | Postman | RESTful APIs |
                  Object-Oriented Programming{" "}
                </p>
                <hr />
                <p>
                  The skills that I possess are mostly from being self-taught.
                  Having spent several years altogether learning on my own.
                  However, I have completed a few classes in college that helped
                  excel my learning.
                </p>
                <p>
                  These include front-end languages, back-end frameworks, and
                  other useful tools.{" "}
                </p>
                <p>
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
