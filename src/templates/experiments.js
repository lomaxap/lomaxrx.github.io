import './project.scss';
import './experiments.scss';

import { PostNav } from './projects.js';

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

export default class Experiments extends React.Component {
  constructor(props){
    super(props);
    this.scripts = [];
  }

  componentDidMount(){
    const { markdownRemark: { frontmatter } } = this.props.data;
    if(frontmatter.scripts){
      for(let s of frontmatter.scripts){
        let script = document.createElement('script');
        script.src = s;
        script.type = 'text/javascript';
        this.scripts.push(script);
        document.body.appendChild(script);
      }
    }

    if(frontmatter.background){
      this.props.setPageBg(frontmatter.background);
    }
  }

  componentWillUnmount(){
    for(let s of this.scripts){
      document.body.removeChild(s);
    }
  }
  render(){
    const {
      data: { markdownRemark: post },
      pathContext: { next, previous }
    } = this.props;
    return (
      <div className="page project experiment container-800">
        <Helmet title={`Andrew Lomax - ${post.frontmatter.title}`} />
        <div className="back">
          <Link to="/projects/viz"><h4>Viz</h4></Link>
        </div>
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostNav previous={previous} next={next} label="Viz" Labeltag="h4"/>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ExperimentsByPath($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        background
      }
    }
  }
`;
