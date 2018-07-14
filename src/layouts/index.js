import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.scss';
import { init as initBg } from '../utils/background';

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bg: 'white'
    }
  }
  componentDidMount(){
    let { location } = this.props;
    initBg({ addShapes: location.pathname === '/' });
  }

  componentWillUpdate(nextProps){
    const { location: prevLocation } = nextProps;
    const { location } = this.props;
    if(prevLocation.pathname !== location.pathname)
      this.setState({ bg:'white' });
  }

  setPageBg = (bg) => {
    this.setState({ bg });
  }
  render(){
    let { data, children, markdownRemark, location } = this.props;
    return(
      <main id="site" className={`${this.state.bg}-background`}>
        <Helmet
          title={'Andrew Lomax'}
          meta={[
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
          ]}
        >
        <link rel="icon" type="image/png" href="/static/images/favicon.png" sizes="16x16" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} path={location.pathname} />
        <div>
          {children({ ...this.props, setPageBg: this.setPageBg })}
        </div>
        <Footer />
      </main>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
