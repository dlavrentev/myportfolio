import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>d.lavrentev@outlook.de</h5>
            <a href="mailto:d.lavrentev@outlook.de" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>dlavren_</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1449275418448629760"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+49 * * * * * * * *</h5>
            <a
              href="https://api.whatsapp.com/send?phone=4915209262435"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}
        <form action="">
          <input type="text" name="name" placeholde="Your Full Name" required />
          <input type="email" name="email" placeholde="Your Email" required />
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

export default Contact;
