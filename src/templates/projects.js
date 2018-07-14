import './projects.scss';

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export const PostNav = ({previous, next, label, Labeltag="p"}) => (
  <div className="post-nav row">
    <div className="col-6">
      {previous && <span>
        <Labeltag>Prev. {label}</Labeltag>
        <Link to={previous.fields.slug}><h3>{previous.frontmatter.title}</h3></Link>
      </span>}
    </div>
    <div className="col-6" style={{textAlign: 'right'}}>
      {next && <span>
        <Labeltag>Next {label}</Labeltag>
        <Link to={next.fields.slug}><h3>{next.frontmatter.title}</h3></Link>
      </span>}
    </div>
  </div>
);

export default class Projects extends React.Component {
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
      <div className="page project container-800">
        <Helmet title={`Andrew Lomax - ${post.frontmatter.title}`} />

        <h1 className="project__title">{post.frontmatter.title}</h1>
        {/*post.frontmatter.description && <p className="description">{post.frontmatter.description}</p>*/}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostNav previous={previous} next={next} label="Project"/>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ProjectsByPath($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        background
      }
    }
  }
`;
