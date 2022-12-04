import './index.css'
import React, { useState, useEffect } from 'react';
import pdf from '../../resources/BISIAS.pdf';

export default function About() {

  const [aboutClassName, setAboutClassName] = useState('');

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width >= 1200) {
      setAboutClassName('aboutReallyBigScreens');
    } else if ( windowDimensions.width < 1200 &&
                windowDimensions.width >= 900) {
      setAboutClassName('aboutBigScreens');
    } else {
      setAboutClassName('aboutSmallScreens');
    }
  }, [windowDimensions]);

  return (
    <div className='About' id='about'>
      <div className='centered div1'>
        <h1 className='title'>Few words about me</h1>
      </div>
      <div className={aboutClassName}>
        <p>
          I'm currently working as an open source engineer contributing to <strong><a href='https://ozone.apache.org/' style={{ color: '#f5a62a' }}>Apache Ozone</a></strong>.
          Apache Ozone is a highly scalable, distributed storage for Analytics, Big data and Cloud Native applications.
        </p>
        <p>
          Why open source? Through open source, we can develop and improve software that's available to every one.
          My contributions are my way of trying to make the world a better place and make people's life easier.
          Also, while working on an open source project, you collaborate with a lot of people
          with different backgrounds and that helps me evolve and become better at what I do.
        </p>
        <p>
          I mainly focus on backend work with Java but I'm always working
          on some side project, struggling to use a technology I know nothing about.
          Sometimes I'm building a web app, sometimes a mobile app
          and other times I'm writing a python script to automate a process.
        </p>
        <p>
          Each technology has its own use case, so on each occasion I try to find the one
          that's better suited for the task at hand. There is a good chance, that I won't know how
          to use it, but that never stopped me from getting familiar with something new.
        </p>
        <p><strong>Check out my <a href={pdf} target='_blank' style={{ color: '#f5a62a' }}>resume</a>.</strong></p>
      </div>
    </div>
  );
}