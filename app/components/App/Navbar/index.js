import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Button from 'components/Reusable/SimpleButton';

// import { logoutUser } from 'containers/LoginPage/actions';
import { NavbarStyles } from './style';


class NavBar extends React.Component {
  logOut() {
    // return () => this.props.logoutUser();
  }

  goToTest() {
    // return () => this.props.router.push('/test');
  }

  navigateTo(location) {
    // return () => this.props.router.push(location);
  }

  renderNavRight(loggedIn) {
    if (loggedIn) {
      return (
        <Nav pullRight>
          <NavItem>{ /* this.props.session.currentUser.email */ 'name' }</NavItem>
          <NavItem eventKey={1} href="#" onClick={ ::this.logOut() }>Sign Out</NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav pullRight>
          <NavItem eventKey={2} href="/login" onClick={ ::this.navigateTo('/login') }>Sign In</NavItem>
          <NavItem eventKey={2} href="/register" onClick={ ::this.navigateTo('/register') }>Register</NavItem>
        </Nav>
      );
    }
  }

  render() {
    // const loggedIn = this.props.loggedIn;
    const loggedIn = true;

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
              <NavItem eventKey={1} href="/test" onClick={ ::this.goToTest() }>Test</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>

            { this.renderNavRight(loggedIn) }

          </Navbar.Collapse>
        </Navbar>

      </NavbarStyles>
    );
  }
}

// NavBar.propTypes = {
//   session: PropTypes.object,
//   router: PropTypes.object,
//   logoutUser: PropTypes.func,
//   loggedIn: PropTypes.bool,
// };

const mapStateToProps = (state, ownProps) => ({
  // session: state.session,
  // loggedIn: state.session.loggedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
