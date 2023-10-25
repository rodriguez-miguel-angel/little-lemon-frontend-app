import '../../App.css';

import chefA from '../../images/Mario and Adrian A.jpg';
import chefB from '../../images/restaurant chef B.jpg';


function About() {
  return (
    <>
      <section className='About'>
        <aside className="about-content">
            <h2 className='display-title'>{"Little Lemon"}</h2>
            <h3 className='subtitle'>{"Chicago"}</h3>
            <p className='paragraph-text'>
            {
            "We are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist."
            }
            </p>
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