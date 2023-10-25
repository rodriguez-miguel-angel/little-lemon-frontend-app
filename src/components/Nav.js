import '../App.css';
import Home from './Home';
import About from './Main/About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';


function Nav() {
  return (
    <>
        <nav className='Nav'>
            <ul className='links'>
                <li className='link'>
                    <a
                    href='/home'
                    children={<Home />}>
                        Home
                    </a>
                </li>
                <li>
                    <a
                    href='/about'
                    children={<About />}>
                        About
                    </a>
                </li>
                <li>
                    <a
                    href='/menu'
                    children={<Menu />}>
                        Menu
                    </a>
                </li>
                <li>
                    <a
                    href='/reservations'
                    children={<Reservations />}>
                        Reservations
                    </a>
                </li>
                <li>
                    <a
                    href='/order'
                    children={<Order />}>
                    Order Online
                    </a>
                </li>
                <li>
                    <a
                    href='/login'
                    children={<Login />}>
                    Login
                    </a>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Nav;