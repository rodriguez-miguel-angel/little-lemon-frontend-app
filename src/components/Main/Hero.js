import '../../App.css';
import './Main.css';

import Chicago from './Chicago';

import restuarant from '../../images/restauranfood.svg';

function Hero() {
  return (
    <>
      <section className='Hero'>
        <aside className='hero-content'>
          <Chicago />
          <button className='button call-to-action'>{"Reserve a Table"}</button>  
        </aside>
        <span className='hero-imgage'>
          <img src={restuarant} className='restuarant' alt="restuarant" width="100" height="100"/>
        </span>
      </section>
    </>
  );
}

export default Hero;