import PropTypes from 'prop-types';
import React from "react";
import Helmet from "react-helmet";
import { injectGlobal } from 'styled-components';

require('prismjs/themes/prism.css'); // prismjs is a dependency of gatsby-remark-prismjs


class Layout extends React.Component {

  render() {
    return (
      <div>
        { this.renderHead() }
        { this.renderBaseStyles() }
        { this.props.children }
      </div>
    );
  }

  renderHead() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrey Azov: Personal Website</title>
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans"
          rel="stylesheet"
          type='text/css'
        />
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

      h1 {
        font-family: 'PT Sans', serif;
        font-size: 3.5rem;
      }

      h2 {
        font-family: 'PT Sans', serif;
        font-size: 2.6rem;
      }

      h3 {
        font-family: 'PT Sans', serif;
        font-size: 2rem;
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

      blockquote {
        margin: 0;
        padding-left: 1.2em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        border-left: 5px solid grey;
        color: #666666;
      }

      blockquote p {
        margin: 0;
      }
    `;
  }

}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
