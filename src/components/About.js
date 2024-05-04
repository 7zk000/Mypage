import React from 'react';

function About() {
  return (
    <div className='about'>
      <div>
        <h1>About</h1>
        <p>I'm a front-end engineer.</p>
      </div>
      <div className='about-contents'>
          <img src="https://github-readme-stats.vercel.app/api?username=B49HACK&show_icons=true&theme=dark" alt="GitHub Stats" className='about-contents'/>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=B49HACK&theme=dark" alt="Most Used Languages" className='about-contents'/>
      </div>
    </div>
  );
}

export default About;
