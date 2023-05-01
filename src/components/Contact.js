import React, { useState} from 'react';

function ContactForm() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  function updateEmail(event) {
    setEmail(event.target.value)
  }
  function updateName(event) {
    setName(event.target.value)
  }
  function updateMessage(event) {
    setMessage(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const data = {name, email, message}
    //to do: use accios to submit data
    console.log(data)
  }
  return (
    <div className='contact-container'>
        <form className="contact-form" onSubmit={handleSubmit}>
            <label for="email"> Email Address </label>
            <input id="email" type="text" name="email" value={email} onChange={updateEmail}/>
            <label for="email"> Name </label>
            <input id="name" type="text" name="name" value={name} onChange={updateName}/>
            <textarea id="message" name="message" value={message} onChange={updateMessage}/>
            <button type="submit"> Submit </button>
        </form>
    </div>
  );
}

export default ContactForm;