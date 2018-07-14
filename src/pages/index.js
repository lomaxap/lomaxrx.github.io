import './index.scss';

import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <ul className="home__menu">
    <li>
      <Link to='/projects'>
        <h1>Projects</h1>
      </Link>
    </li>
    <li>
      <Link to='/work'>
        <h1>Work & Experience</h1>
      </Link>
    </li>
    <li>
      <Link to='/about'>
        <h1>About Me</h1>
      </Link>
    </li>
  </ul>
);

const ContactForm = () => (
  <div className="contact" id="contact">
    <h1>Contact</h1>
    <div className="container">
      <div style={{maxWidth: '525px', margin: '50px auto 50px auto', textAlign: 'center'}}>
        <p>{"Yes. I'm available for freelance data viz and website design/dev work!"}</p>
      </div>
      <form action="https://formspree.io/your@email.com"
        method="POST">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="input">
          <label htmlFor="_replyto">Email</label>
          <input type="email" name="_replyto" />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="6" />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
);

export default class Home extends React.Component {

  render(){
    return (
      <div className="page home">
        <Menu />
        <ContactForm />
      </div>
    );
  }
}
