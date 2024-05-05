import React from 'react';
import { HeaderComponent, StatsComponent, ContactComponent, FooterComponent } from './index';

function Home() {
  return (
    <div className='home'>
      <HeaderComponent />
      <StatsComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
