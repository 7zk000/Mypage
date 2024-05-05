import React, { useState } from 'react';

function ContactComponent() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className='contact-container'>
      <button className="btn btn-primary" onClick={() => setShowContacts(!showContacts)}>
        Contact
      </button>
      <div className={`contact-icons ${showContacts ? 'show' : ''}`}>
        <a href="https://github.com/B49HACK" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github">github</i>
        </a>
        <a href="https://instagram.com/7zk.me" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram">instagram</i>
        </a>
        <a href="https://twitter.com/7zkme" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter">twitter</i>
        </a>
      </div>
    </div>
  );
}

export default ContactComponent;
