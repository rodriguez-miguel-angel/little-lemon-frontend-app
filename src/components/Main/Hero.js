import '../../App.css';
import './Main.css';

import restuarant from '../../images/restauranfood.svg';

function Hero() {
  return (
    <>
      <section className='Hero'>
        <aside className='hero-content'>
          <h2 className='display-title'>{"Little Lemon"}</h2>
          <h3 className='subtitle'>{"Chicago"}</h3>
          <p className='hero-paragraph-text'>
            {
            "We are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist."
            }
          </p>
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