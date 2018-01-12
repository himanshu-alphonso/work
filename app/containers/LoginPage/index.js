import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import GoogleLogin from 'react-google-login';
import { Grid, Row, Col } from 'react-bootstrap';

import { GOOGLE_CLIENT_ID } from 'containers/App/constants';

import * as actions from 'containers/App/actions';
import LoginPageStyles from './style';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSuccess() {
    return (response) => this.props.loginUser(response);
  }

  onFailure() {
    return (response) => this.props.receiveUserError(response);
  }

  render() {
    return (
      <LoginPageStyles>
        <Helmet title="Login | Alphonso Internal Dashboards" />
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="login-button-container">
                <GoogleLogin
                  clientId={ GOOGLE_CLIENT_ID }
                  buttonText="Login"
                  onSuccess={ ::this.onSuccess() }
                  onFailure={ ::this.onFailure() }
                  hostedDomain="alphonso.tv"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </LoginPageStyles>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func,
  receiveUserError: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: (data) => dispatch(actions.loginUser(data)),
  receiveUserError: (data) => dispatch(actions.receiveUserError(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
