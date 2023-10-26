import '../../App.css';

import Chicago from './Chicago';

import chefA from '../../images/Mario and Adrian A.jpg';
import chefB from '../../images/restaurant chef B.jpg';


function About() {
  return (
    <>
      <section className='About'>
        <aside className="about-content">
            <Chicago />
        </aside>
        <span className='about-images'>
            <img src={chefA} className='chefA' alt="Restuarant chefs Mario and Adrian" width="75" height="75"></img>
            <img src={chefB} className='chefB' alt="Restuarant chef Adrian" width="75" height="75"></img>
        </span>
      </section>
    </>
  );
}

export default About;