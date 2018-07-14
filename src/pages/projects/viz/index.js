import React from 'react';
import Link from 'gatsby-link'

const ProjectItem = ({to, title, description}) => (
  <div className="projects__item">
   <Link to={to}>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <p>
      {description}
      </p>
   </Link>
  </div>
)

export default class Projects extends React.Component {
  componentDidMount(){
    this.props.setPageBg('black');
  }
  render(){
    return null;
    let projects = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="page projects experiment container">
        {projects.map((p,i)=>(
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
  query ExperimentsIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: {regex : "\/projects\/viz/"} }
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
