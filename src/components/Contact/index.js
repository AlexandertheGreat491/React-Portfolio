// imports react
import React, { useState } from "react";
// validates an email address entered by a user against the regex
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <section className="card justify-content-center contactform ms-5">
      <form className="contactform card-body" onSubmit={handleSubmit}>
        <h1 id="contact" className="mb-5 card-header">
          Contact Me
        </h1>
        <div>
          <label htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleSubmit}
          />
        </div>
        <div>
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="mt-2 mb-2" id="submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
