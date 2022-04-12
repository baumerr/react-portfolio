import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email address is invalid.");
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

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contact row">
      <div className="contact col-2 mx-auto">
        <a className="btn btn-light email" href="mailto: randy.baumer@hotmail.com" role="button">Email Me!</a>
      </div>
      
      
      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div className="words">
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="words">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="words">
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div className="words">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="words">
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      </form> */}
    </section>
  );
}

export default Contact;
