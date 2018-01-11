import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import GoogleLogin from 'react-google-login';
import { Grid, Row, Col } from 'react-bootstrap';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };


    return (
      <Grid>
        <Row>
          <Col>
            <div className="login-button-container">
              <GoogleLogin
                clientId="977981820563-s4hlgjuopjsucsp91p0kctd40tdkukr4.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
