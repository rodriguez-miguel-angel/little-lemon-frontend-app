import '../App.css';

import logo from '../images/logos/Asset_20@4x.png';
import Nav from './Nav';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYelp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    contactType: "Physical Address",
    contactValue: "2311 S Kedzie Ave, Chicago, IL",
  },
  {
    contactType: "Phone Number",
    contactValue: "(312) 745-1862",
  },
  {
    contactType: "Email Address",
    contactValue: "little.lemon@outlook.com",
  },
];



const socials = [
  {
    icon: faFacebook,
    url: "https://facebook.com/",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/",
  },
  {
    icon: faYelp,
    url: "https://www.yelp.com/",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/",
  },
];


function Footer() {
  return (
    <>
      <footer className='Footer'>
        <img src={logo} className='logo' alt="Logo"/>
        <article>
            <section className='DoormatNavigation footer-text'>
              <h2 className='section-categories'>Doormat Navigation</h2>
              <Nav />
            </section>
        </article>
        <article>
            <section className='Contact footer-text'>
              <h2 className='section-categories'>Contact</h2>
              <ul>
                {
                  /* Add contacts based on the `contacts` data */
                contacts.map((contact) => (
                  <li
                    key={contact.contactType}
                    children={contact.contactValue}
                    />
                ))
                }
              </ul>
            </section>
        </article>
        <article>
            <section className='SocialMediaLinks footer-text'>
              <h2 className='section-categories'>Social Media Links</h2>
              <nav>
                {
                /* Add social media links based on the `socials` data */
                socials.map((social) => (
                  <a
                    key={social.url} 
                    href={social.url}
                    children={<FontAwesomeIcon 
                      key={social.url}
                      icon={social.icon} 
                      size="xl"/>} />
                ))
                }
              </nav>
            </section>
        </article>
      </footer>
    </>
  );
}

export default Footer;