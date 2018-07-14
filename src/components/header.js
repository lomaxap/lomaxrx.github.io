import './header.scss';

import React from 'react'
import Link from 'gatsby-link'

import DottedList from './inline-dotted-list';

export default class Header extends React.Component {
  skills = [
    <h5>javascript</h5>,
    <h5>react</h5>,
    <h5>d3</h5>,
    <h5>html5/css3</h5>,
    <h5>python</h5>,
    <h5>django</h5>,
    <h5>salesforce/apex</h5>
  ]

  getPageTitle = () => {
    let { path } = this.props;
    let root = path.split('/')[1]
    switch(root){
      case 'about':
        return <Link to="/about"><p style={{ lineHeight: '52px' }}>About Me</p></Link>;
      case 'projects':
        return <Link to="/projects"><p>Projects & Experiments</p></Link>;
      case 'work':
        return <Link to="/work"><p>Work & Experience</p></Link>;
      default:
        return false;
    }
  }

  getPrev = () => {
    let { path } = this.props;
    let root = path.split('/')[1]
    switch(root){
      case 'about':
        return '/work';
      case 'projects':
        return '/about';
      case 'work':
        return '/projects';
      default:
        return false;
    }
  }

  getNext = () => {
    let { path } = this.props;
    let root = path.split('/')[1]
    switch(root){
      case 'about':
        return '/projects';
      case 'projects':
        return '/work';
      case 'work':
        return '/about';
      default:
        return false;
    }
  }

  render(){
    let pageTitle = this.getPageTitle();
    return (
      <header className="header container">
        <div className="row flex-center">
          <div className="col-6 name-title">
            <Link to="/"><h4>
              <span className="name">ANDREW LOMAX&nbsp;&nbsp;/&nbsp;&nbsp;</span>
              <span className="title">software engineer</span>
            </h4></Link>
          </div>
          <div className="col-6 skills">
            <DottedList items={this.skills} id="skills"/>
          </div>
          <div className={`header__spacer col-6 ${pageTitle ? 'expanded' : ''}`}>
            {pageTitle && <Link className="prev-page" to={this.getPrev()}>{"<"}</Link>}
            {pageTitle}
            {pageTitle && <Link className="next-page" to={this.getNext()}>{">"}</Link>}
          </div>
        </div>
      </header>
    );
  }
}
