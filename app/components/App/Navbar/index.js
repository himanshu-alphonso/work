import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavbarSmall from 'components/App/Navbar/NavbarSmall';


class Navbar extends React.Component {
  renderNavbar() {
    return (
      <NavbarSmall
        breadcrumbs
        sidebar
        navigateToBrand={ () => { } }
        isLocalNetworkPage={this.props.isLocalNetworkPage}
      />
    );
  }

  render() {
    return (
      <div>
        { this.renderNavbar() }
      </div>
    );
  }
}

Navbar.propTypes = {
  isLocalNetworkPage: PropTypes.bool
};

export default withRouter(Navbar);
