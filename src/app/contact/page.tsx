import React from 'react'
import "./contact.css";

const page = () => {
  return (
    <div>
      <div className="contact-container">
  <h1>Contact Us</h1>

  {/* <!-- Contact Information --> */}
  <div className="contact-info ">
    <div className="info-section ">
      <h2>Get in Touch</h2>
      <p><strong>Phone:</strong> +92 000 0000000</p>
      <p><strong>Email:</strong> support@electronics-shop.com</p>
      <p><strong>Address:</strong> Electronics Market, Karachi </p>
    </div>

    {/* <!-- Contact Form --> */}
    <form className="contact-form" id="contactForm">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Your Phone" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Your Message"  required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>

  {/* <!-- Social Media Icons --> */}
  <div className="social-icons">
    <a href="#" aria-label="Facebook" className="icon facebook">F</a>
    <a href="#" aria-label="Twitter" className="icon twitter">T</a>
    <a href="#" aria-label="Instagram" className="icon instagram">I</a>
  </div>
</div>

    </div>
  )
}

export default page
