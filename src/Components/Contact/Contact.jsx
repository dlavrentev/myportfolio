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
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>d.lavrentev@outlook.de</h5>
            <a href="mailto:d.lavrentev@outlook.de" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>dlavren_</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1449275418448629760" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+49 * * * * * * * *</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915209262435" target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
