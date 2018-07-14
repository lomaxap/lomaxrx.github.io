import './index.scss';

import React from 'react';
import Link from 'gatsby-link'

const ProjectItem = ({to, title, description, children}) => (
  <div className="projects__item">
   <Link to={to}>
      <h1>{title}</h1>
      {description &&<p>
        {description}
      </p>}
   </Link>
   {children}
  </div>
)

export default class Projects extends React.Component {

  render(){
    let projects = this.props.data.allMarkdownRemark.edges;
    let firstExperiment = projects.filter(p => p.node.fields.slug.indexOf('viz') !== -1)[0];
    return (
      <div className="page projects container">
        {firstExperiment &&<ProjectItem to={'/projects/viz'}
          title="Viz"
          description="Ongoing practice and exploration with creative coding tools.">
          <h4>latest: <strong>
            <Link to={firstExperiment.node.fields.slug}>
            {firstExperiment.node.frontmatter.title}</Link>
            </strong>
          </h4>
        </ProjectItem>}
        {projects.filter(p => p.node.fields.slug.indexOf('viz')===-1).map((p,i)=>(
          <ProjectItem key={i}
            to={p.node.fields.slug}
            title={p.node.frontmatter.title}
            description={p.node.frontmatter.description}
          />
        ))}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ProjectsIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: {regex : "\/projects/"} }
    ){
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }`
