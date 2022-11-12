import './index.css'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  return (
    <div className='Home' id='home'>
      <div className='centered div'>

        <TypeAnimation
          style={{fontFamily:'monospace'}}
          sequence={[
            "Hello there, I'm Christos Bisias.",
            3000,
            "I'm a software engineer from Greece.",
            3000,
            "Welcome to my personal website.",
            3000
          ]}
          speed={30}
          deletionSpeed={60}
          wrapper="h1"
          repeat={Infinity}
        />
        
      </div>
    </div>
  );
}