import React from "react";

function Contact() {
  return (
    <section>
      <div className='container mb-5'>
        <h2 className='text-center py-5'>Let's Get In Touch</h2>
        <form id='contact' name='contact' method='POST'>
          <input type='hidden' name='form-name' value='contact' />
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='company' className='form-label'>
              Company
            </label>
            <input
              type='text'
              className='form-control'
              id='company'
              name='company'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              id='message'
              name='message'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary mt-3 fw-bold'>
            Submit
          </button>
        </form>
        <div className='status mt-3' id='status'></div>
      </div>
    </section>
  );
}

export default Contact;
