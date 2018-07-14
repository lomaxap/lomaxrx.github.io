import './index.scss';

import React from 'react';
import Link from 'gatsby-link'

const WorkSectionDescription = ({ content : { frontmatter, html } }) => (
  <div className="work__section__text col-lg-6">
    <h1>{frontmatter.title}</h1>
    <h2>{frontmatter.dateRange}</h2>
    <div className="mobile-image">
      <img src={`/static/images/${frontmatter.images[0]}`}
        alt="screen shot of work" />
    </div>
    <div dangerouslySetInnerHTML={{__html: html}}/>
  </div>
);

const WorkSectionImages = ({ images }) => (
  <div className="work__section__images col-lg-6">
    {images.map((src, i)=>(
      <img src={`/static/images/${src}`}
        key={src}
        className={`work__section__images__${i+1}`}
        alt="screen shot of work" />
    ))}
  </div>
);

export default class Work extends React.Component {

  render(){
    let { data: { allMarkdownRemark: { edges }}} = this.props;
    return (
      <div className="page work">
        <div className="work__section na container">
          <div className="row">
            <WorkSectionDescription content={edges[0].node} />
            <WorkSectionImages images={edges[0].node.frontmatter.images}/>
          </div>
        </div>
        <div className="work__section cap container">
          <div className="row">
            <WorkSectionImages images={edges[1].node.frontmatter.images} />
            <WorkSectionDescription content={edges[1].node} />
          </div>
        </div>
        <div className="work__section bfc container">
          <div className="row">
            <WorkSectionDescription content={edges[2].node} />
            <WorkSectionImages images={edges[2].node.frontmatter.images}/>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: {regex : "\/work/"} }
    ){
      edges {
        node {
          html
          frontmatter {
            title
            dateRange
            images
          }
        }
      }
    }
  }`
