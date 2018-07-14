import './index.scss';

import React from 'react';
import Link from 'gatsby-link'

export default class About extends React.Component {

  render(){
    const html = this.props.data.markdownRemark.html
    return (
      <div className="page about">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="about__image">
                <div className="about__image__wrapper">
                  <img className="about__image__0" src="/static/images/andrew-lomax.sm.jpg" />
                </div>
              </div>
            </div>
            <div className="col-sm-7 project">
              <div className="about__bio" dangerouslySetInnerHTML={{__html: html}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
        frontmatter: { title: { eq: "About" } }
    ){
      html
    }
  }
`
