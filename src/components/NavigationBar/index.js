import './index.css'
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { ActiveItemContext } from '../../App';
import { useContext } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../resources/logo.png";

export default function NavigationBar() {

  //const [activeItem, setActiveItem] = useState('');

  const { activeItem, setActiveItem } = useContext(ActiveItemContext);

  return (
    <div className='NavigationBar'>
      <Menu inverted pointing secondary stackable size='massive' className='menu'>
        <Menu.Menu position='left' className='my name'>
          <Link activeClass='active' smooth spy to='home'>
            <img
              src={logo}
              className="nav-logo"
              alt="xBis Logo"
              onClick={() => setActiveItem('')}
              data-to-scrollspy-id='home'
            />
          </Link>
        </Menu.Menu>
        <Menu.Menu position='center'>
          <Link activeClass='active' smooth spy to='about'>
            <Menu.Item
              name='about'
              active={activeItem === 'About'}
              onClick={() => setActiveItem('About')}
              data-to-scrollspy-id='about'
            >
              About
            </Menu.Item>
          </Link>
          <Link activeClass='active' smooth spy to='experience'>
            <Menu.Item
              name='experience'
              active={activeItem === 'Experience'}
              onClick={() => setActiveItem('Experience')}
              data-to-scrollspy-id='experience'
            >
              Experience
            </Menu.Item>
          </Link>
          <Link activeClass='active' smooth spy to='projects'>
            <Menu.Item
              name='projects'
              active={activeItem === 'Projects'}
              onClick={() => setActiveItem('Projects')}
              data-to-scrollspy-id='projects'
            >
              Projects
            </Menu.Item>
          </Link>
          <Link activeClass='active' smooth spy to='contact'>
            <Menu.Item
              name='contact'
              active={activeItem === 'Contact'}
              onClick={() => setActiveItem('Contact')}
              data-to-scrollspy-id='contact'
            >
              Contact
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
}