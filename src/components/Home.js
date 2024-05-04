import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1 className='flex-center'>Hello World! I'm B49HACK!</h1>
      <img src="./logo/favicon.jpg" alt="B49HACK" className='logo flex-center'/>
      <div className='about-contents flex-center'>
          <img src="https://github-readme-stats.vercel.app/api?username=B49HACK&show_icons=true&theme=dark" alt="GitHub Stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=B49HACK&theme=dark" alt="Most Used Languages" />
      </div>

      <div className='copyright flex-center'>
      <p>© 2001-Now 7zk</p>
      </div>
    </div>
  );
}

export default Home;
