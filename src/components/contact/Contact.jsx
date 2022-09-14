import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>harri.ti.best@gmail.com</h5>
            <a
              href="mailto:harri.ti.best@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Connect with me</h5>
            <a
              href="www.linkedin.com/in/harri-best"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          name="contact-form"
          method="POST"
          onSubmit="submit"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <input
            type="text"
            name="contact"
            placeholder="Your full name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
