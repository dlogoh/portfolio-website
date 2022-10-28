import React from "react";

function Contact() {
  // function validateForm() {
  //   var name = document.getElementById("name").value;
  //   if (name === "") {
  //     document.querySelector(".status").innerHTML = "Name cannot be empty";
  //     return false;
  //   }
  //   var email = document.getElementById("email").value;
  //   if (email === "") {
  //     document.querySelector(".status").innerHTML = "Email cannot be empty";
  //     return false;
  //   } else {
  //     var re =
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     if (!re.test(email)) {
  //       document.querySelector(".status").innerHTML = "Email format invalid";
  //       return false;
  //     }
  //   }
  //   var message = document.getElementById("message").value;
  //   if (message === "") {
  //     document.querySelector(".status").innerHTML = "Message cannot be empty";
  //     return false;
  //   }
  //   document.querySelector(".status").innerHTML = "Sending...";
  // }

  return (
    <section>
      <div className="container mb-5">
        <h2 className="text-center py-5">Let's Get In Touch</h2>
        <form
          id="contact-form"
          name="contact-form"
          action="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              required
            ></textarea>
          </div>
          {/* <div className="field">
            <div data-netlify-recaptcha="true"></div>
          </div> */}
        </form>
        <button
          type="submit"
          className="btn btn-primary mt-3 fw-bold"
          // onClick={validateForm}
        >
          Submit
        </button>
        <div className="status mt-3" id="status"></div>
      </div>
    </section>
  );
}

export default Contact;
