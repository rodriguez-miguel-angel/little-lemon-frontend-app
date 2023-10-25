import '../../App.css';
import './Main.css';

import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <>
      <main className='Main'>
        {/* 
        <h1>Main Section</h1> 
        */}
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    </>
  );
}

export default Main;