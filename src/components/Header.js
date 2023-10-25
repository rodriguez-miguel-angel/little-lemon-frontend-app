import '../App.css';
import Nav from './Nav';

import logo from '../images/logo.svg';

/**
 * See <https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb>.
 */

function Header() {
  return (
    <>
        <header className='Header navigation-text'>
            <img src={logo} className='logo' alt="Logo"/>
            <Nav />
        </header>
    </>
  );
}

export default Header;