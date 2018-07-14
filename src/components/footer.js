import './footer.scss'

import React from 'react';
import Link from 'gatsby-link';

import Icons from './social-media-icons';

export default class Footer extends React.Component {

  render(){
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Link to="/"><h4>ANDREW LOMAX</h4></Link>
              <Icons />
              <ul className="site-map">
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/work">Work & Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/*<li><Link to="/projects/viz">Creative Coding</Link></li>*/}
                <li><Link to="/#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-sm-6 gatsby-logo">
              <p>
                Made with&nbsp;
                <a href="https://www.gatsbyjs.org/">
                  <img width="100px" src="https://s3.amazonaws.com/media-p.slid.es/uploads/674824/images/4628521/GatsbyLogo.png" alt="gatsb logo" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
