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
        font-size: 10px;
      }
      body {
        font-family: 'PT Serif', serif;
      }

      a {
        color: blue;
        text-decoration: none;
      }

      a:visited {
        color: blue;
      }

      a:hover {
        text-decoration: underline;
      }

      p {
        font-size: 2rem;
        line-height: 1.4;
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
