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
    <div className='flex justify-center mb-16'>
      <form className="w-3/4 max-w-sm mt-10" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Princess Anna"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={updateEmail}
            placeholder="princess@example.com.au"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={message}
            onChange={updateMessage}
            rows="5"
            placeholder="Enter your message here..."
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default ContactForm;