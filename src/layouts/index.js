import PropTypes from 'prop-types';
import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          background: 'red'
        }}
      >
        { this.props.children() }
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.function,
  location: PropTypes.object,
  route: PropTypes.object,
};

export default Layout;
