import '../App.css';

/*

version-01:

import Home from './Home';
import About from './Main/About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';

*/


import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
        <nav className='Nav'>
            <ul className='links'>
                <li className='link'>
                    {/*
                    version-01:
                    <a
                    href='/home'
                    children={<Home />}>
                        Home
                    </a> */}
                    <Link to="/">{"Home"}</Link>
                </li>
                <li>
                    {/*
                    version-01:
                    <a
                    href='/about'
                    children={<About />}>
                        About
                    </a>
                    */}
                    <Link to="/about">{"About"}</Link>
                </li>
                <li>
                    {/*
                    <a
                    href='/menu'
                    children={<Menu />}>
                        Menu
                    </a> */}
                    <Link to="/menu">{"Menu"}</Link>
                </li>
                <li>
                    {/*
                    version-01:
                    <a
                    href='/reservations'
                    children={<Reservations />}>
                        Reservations
                    </a>
                    */}
                    <Link to="/booking">{"Reservations"}</Link>
                </li>
                <li>
                    {/*
                    version-01:
                    <a
                    href='/order'
                    children={<Order />}>
                    Order Online
                    </a>
                    */}
                    <Link to="/order">{"Order Online"}</Link>
                </li>
                <li>
                    {/*
                    version-01:
                    <a
                    href='/login'
                    children={<Login />}>
                    Login
                    </a> */}
                    <Link to="/login">{"Login"}</Link>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Nav;