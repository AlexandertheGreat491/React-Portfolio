// imports react
import React, { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_8wr5jg6',
      'template_rh1ld4d',
      toSend,
      'VAttkBUX6Azj6oY7o'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
//references https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190

  return (
    <section className="card contactform ms-5" style={{width:"90%", height:"70%"}}>
      <form id="form" className="contactform card-body" onSubmit={onSubmit}>
        <h1 id="contact" className="mb-4 card-header">
          Contact Me
        </h1>
        <label id="from" htmlFor="from_name">From:</label>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label id="to" htmlFor="to_name">To:</label>
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <label id="message" htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <label id="email" htmlFor="reply_to">Email:</label>
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button className="mt-2 mb-2" id="submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
