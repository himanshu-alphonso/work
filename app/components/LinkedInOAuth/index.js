import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Body } from 'components/typography/Body';
// import { openPopup } from 'components/Popup/actions';
import { POPUP_TRACKING_PROTECTION } from 'containers/App/constants';
import { loggingIn, loggingOut, alreadyLoggedIn } from './actions';
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
      IN.Event.onOnce(IN, 'systemReady', this.props.alreadyLoggedIn);
    }
  }

  popupAlert() {
    // this.props.openPopup(POPUP_TRACKING_PROTECTION);
  }

  customLinkedInLogin() {
    if (this.untrackingOn) alert('alert');
    this.props.loggingIn();
  }

  logout() {
    if (this.untrackingOn) alert('alert');
    this.props.loggingOut();
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
  loggingIn: PropTypes.func.isRequired,
  loggingOut: PropTypes.func.isRequired,
  alreadyLoggedIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  firstName: state.getIn(['session', 'firstName']),
  lastName: state.getIn(['session', 'lastName']),
  email: state.getIn(['session', 'email']),
  loggedIn: state.getIn(['session', 'loggedIn']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loggingIn: () => dispatch(loggingIn()),
  loggingOut: () => dispatch(loggingOut()),
  alreadyLoggedIn: () => dispatch(alreadyLoggedIn()),
  // openPopup: (popupType, popupInfo) => dispatch(openPopup(popupType, popupInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkedInOAuth);
