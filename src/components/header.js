import React from 'react';
import ProfileViews from './profile';

function HeaderComponent() {
  return (
    <div className='header-container'>
      <div className='flex-center'>
        <h1>Hello World! I'm 7zk!</h1>
      </div>
        <ProfileViews className='ProfileViews'/>
      <div className='flex-center'>
        <img src="./logo/favicon.jpg" alt="B49HACK" className='logo'/>
      </div>
    </div>

  );
}

export default HeaderComponent;
