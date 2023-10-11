import '../App.css';

import logo from '../images/logo.svg';
import Nav from './Nav';

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Logo"/>
        <article>
            <section>
                <h1>Doormat Navigation</h1>
                <Nav />
            </section>
            <section>
                <h1>Contact</h1>
            </section>
            <section>
                <h1>Social Media Links</h1>
            </section>
        </article>
      </footer>
    </>
  );
}

export default Footer;