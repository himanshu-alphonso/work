import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Button from 'components/Reusable/SimpleButton';

import { logoutUser } from 'containers/App/actions';
import { NavbarStyles } from './style';


class NavBar extends React.Component {
  logOut() {
    return () => this.props.logoutUser();
  }

  navigateTo(location) {
    return (e) => {
      e.stopPropagation();
      this.props.history.push(location);
    };
  }

  renderUserImage() {
    return (
      <div>

      </div>
    );
  }

  renderNavRight(loggedIn) {
    if (loggedIn) {
      return (
        <Nav pullRight>
          <NavItem>{ this.props.name }</NavItem>
          <NavItem eventKey={1} href="#" onClick={ ::this.logOut() }>Sign Out</NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav pullRight>
          <NavItem eventKey={2} href="#">
            { this.renderUserImage() }
          </NavItem>
          <NavItem eventKey={2} href="#" onClick={ ::this.navigateTo('/login') }>Sign In</NavItem>
          <NavItem eventKey={2} href="#" onClick={ ::this.navigateTo('/register') }>Register</NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <NavbarStyles>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="nav-header-logo" onClick={ ::this.navigateTo('/') }>Alphonso Internal Dashboards</div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" onClick={ ::this.navigateTo('/test') }>Test</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>

            { this.renderNavRight(this.props.loggedIn) }

          </Navbar.Collapse>
        </Navbar>

      </NavbarStyles>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func,
  loggedIn: PropTypes.bool,
  name: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.getIn(['session', 'user', 'givenName']),
  loggedIn: state.getIn(['session', 'loggedIn']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
