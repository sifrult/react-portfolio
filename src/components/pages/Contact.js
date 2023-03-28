import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateName = () => {
    if (name === '') {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }
  };

  const validateMessage = () => {
    if (message === '') {
      setMessageError('Please enter a message');
    } else {
      setMessageError('');
    }
  };

  const validateEntry = (e) => {
    const { name } = e.target;
    if (name === 'email') {
      validateEmail();
    } else if (name === 'name') {
      validateName();
    } else if (name === 'message') {
      validateMessage();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validateName();
    validateMessage();
    if (!emailError && !nameError && !messageError) {
      alert(`Hello ${name}, thank you for submitting your message`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <p className='contact'>Email: amy.snarr16@gmail.com <br />
      Phone: 801-520-3022</p>
      <div className='formStyle'>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={validateEntry}
            type="text"
            placeholder="Name"
          />
          {nameError && <div className="error">{nameError}</div>}
          <br />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={validateEntry}
            type="text"
            placeholder="Email"
          />
          {emailError && <div className="error">{emailError}</div>}
          <br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={validateEntry}
            type="text"
            placeholder="Message"
          />
          {messageError && <div className="error">{messageError}</div>}
          <br />
          <button className='btn' type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
  </div>
  );
}
