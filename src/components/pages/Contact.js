import React, {useState} from 'react';

export default function Contact() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;


    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      alert(`Hello ${Name}, thank you for submitting your message`);
      setName('');
      setEmail('');
      setMessage('');
    };

    return (
      <div>

        <form className="form">
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={Email}
            name="Email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={Message}
            name="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
}
