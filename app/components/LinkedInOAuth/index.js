import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Body } from 'components/typography/Body';
import * as actions from './actions';
import LinkedInOAuthStyle from './style';


class LinkedInOAuth extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.untrackingOn = false;
  }

  componentWillMount() {
    if (typeof IN === 'undefined') {
      this.untrackingOn = true;
    } else {
      IN.Event.onOnce(IN, 'systemReady', this.props.confirmAuthorization);
    }
  }

  customLinkedInLogin() {
    if (this.untrackingOn) alert('alert'); // eslint-disable-line
    this.props.loginUser();
  }

  logout() {
    if (this.untrackingOn) alert('alert'); // eslint-disable-line
    this.props.logoutUser();
  }

  loggedInRender() {
    return (
      <LinkedInOAuthStyle>
        <Body text={this.props.firstName + ' ' + this.props.lastName + ' | '} color="#cc0000" />
        <button onClick={this.logout} className="navbar-signout-btn">
          <Body text="Sign Out" color="#cc0000" hoverColor="#FF4D4D" />
        </button>
      </LinkedInOAuthStyle>
    );
  }

  loggedOutRender() {
    return (
      <button onClick={this.untrackingOn ? ::this.popupAlert : ::this.customLinkedInLogin}>
        <Body text="Log in with LinkedIn" color="#cc0000" hoverColor="#FF4D4D" />
      </button>
    );
  }

  render() {
    const elements = this.props.loggedIn ? this.loggedInRender() : this.loggedOutRender();
    return (
      <div>
        { elements }
      </div>
    );
  }
}

LinkedInOAuth.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  loggedIn: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  confirmAuthorization: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  firstName: state.getIn(['session', 'firstName']),
  lastName: state.getIn(['session', 'lastName']),
  email: state.getIn(['session', 'email']),
  loggedIn: state.getIn(['session', 'loggedIn']),
  token: state.getIn(['session', 'token']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: () => dispatch(actions.loginUser()),
  logoutUser: () => dispatch(actions.logoutUser()),
  confirmAuthorization: () => dispatch(actions.confirmAuthorization()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkedInOAuth);
