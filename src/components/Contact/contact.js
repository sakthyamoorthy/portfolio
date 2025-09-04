import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart-logo.png';
import Adobe from '../../assets/adobe-logo.png';
import Microsoft from '../../assets/Microsoft-logo.png';
import Facebook from '../../assets/facebook workmark.png';
import Instagram from '../../assets/instagram.png';
import Facebook1 from '../../assets/facebook-logo.png';
import Twitter from '../../assets/twitter-logo.png';
import Youtube from '../../assets/youtube-logo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4djhzfr',
      'template_n1p0af5',
      form.current,
      'PhiIRFxc71ZvpwGjO'
    )
    .then((result) => {
      console.log(result.text);
      e.target.reset();
      alert('Email Send !');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section id='contactPage'>
      <div className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">I have the opportunity to work with a diverse group of companies I have worked with includes.</p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart logo" className="clientImg" />
          <img src={Adobe} alt="Adobe logo" className="clientImg" />
          <img src={Microsoft} alt="Microsoft logo" className="clientImg" />
          <img src={Facebook} alt="Facebook wordmark" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type="submit"  value='send' className="submitBtn">Submit</button>
          <div className="links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="link" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook1} alt="Facebook" className="link" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" className="link" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="YouTube" className="link" />
            </a>
      </div>
        </form>
      </div>
    </section>
  );
};


export default Contact;
