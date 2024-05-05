import {React, useState} from 'react';

function Home() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className='home'>
      <h1>Hello World! I'm B49HACK!</h1>
      <img src="./logo/favicon.jpg" alt="B49HACK" className='logo flex-center'/>

      <div className='about-contents flex-center'>
          <img src="https://github-readme-stats.vercel.app/api?username=B49HACK&show_icons=true&theme=dark" alt="GitHub Stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=B49HACK&theme=dark" alt="Most Used Languages" />
      </div>

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

      <div className='copyright flex-center'>
      <p>© 2001-Now 7zk</p>
      </div>
    </div>
  );
}

export default Home;
