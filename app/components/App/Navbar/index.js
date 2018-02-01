import React, { PropTypes } from 'react';
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
    console.log(this.props);
    return (
      <div>
        { this.renderNavbar() }
      </div>
    );
  }
}

Navbar.propTypes = {
  // router: PropTypes.object.isRequired,
  isLocalNetworkPage: PropTypes.bool
};

export default withRouter(Navbar);
