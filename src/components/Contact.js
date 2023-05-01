import React from 'react';
// import "../styles/ContactForm"
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("meqwvyav");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='contact-container'>
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="email"> Email Address </label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}> Submit </button>
        </form>
    </div>
  );
}

export default ContactForm;