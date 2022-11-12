import './index.css'
import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-scroll';

export default function Footer() {

  return (
    <div className='Footer'>
      <Segment size='massive' style={{backgroundColor:'rgb(8, 49, 97)', color:'rgb(230, 227, 227)'}}>
        <p>
          Designed and powered by 
          <Link activeClass='active' smooth spy to='about' style={{cursor:'pointer'}}>
            &nbsp; me.
          </Link>
        </p>

        <div className='menu icons'>
          <a 
            href='https://www.linkedin.com/in/xbis/' 
            style={{color:'rgb(230, 227, 227)'}}
          >
            <Icon 
              name='linkedin' 
              className='footerIcon' 
              size='large' 
              style={{margin:'0px 10px 20px 10px'}}
            />
          </a>
          <a 
            href='https://github.com/xBis7' 
            style={{color:'rgb(230, 227, 227)'}}
          >
            <Icon 
              name='github' 
              className='footerIcon' 
              size='large' 
              style={{margin:'0px 10px 20px 10px'}}
            />
          </a>
        </div>

        <p className='copyright'>
          <Icon name="copyright outline" />Christos Bisias
        </p>
      </Segment>
    </div>
  );
}