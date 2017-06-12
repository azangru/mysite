import PropTypes from 'prop-types';
import React from "react";
import Helmet from "react-helmet";
import { injectGlobal } from 'styled-components';


class Layout extends React.Component {

  render() {
    return (
      <div>
        { this.renderHead() }
        { this.renderBaseStyles() }
        { this.props.children() }
      </div>
    );
  }

  renderHead() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrey Azov: Personal Website</title>
        <link
          href='http://fonts.googleapis.com/css?family=PT+Serif&subset=latin,cyrillic,cyrillic-ext,latin-ext'
          rel='stylesheet'
          type='text/css'
        />
      </Helmet>
    );
  }

  renderBaseStyles() {
    return injectGlobal`
      html, body {
        padding: 0;
        margin: 0;
      }
      body {
        font-size: 62.5%;
      }
    `;
  }

}

Layout.propTypes = {
  children: PropTypes.function,
  location: PropTypes.object,
  route: PropTypes.object,
};

export default Layout;
