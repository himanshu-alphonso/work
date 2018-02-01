import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter, Link } from 'react-router';


import { Body } from 'components/typography/Body';
import { Description } from 'components/typography/Description';
import LinkedInOAuth from 'components/LinkedInOAuth';

import { NavbarTitle, NavbarContainerSmall } from '../style';


class NavbarSmall extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <NavbarContainerSmall>
        <div className="header-wrapper">
          <div className="navbar-small-wrapper">
            <Grid>
              <Row className="show-grid">
                <Col sm={12} md={12}>
                  <div className="navbar-small">
                    <div className="navbar-small-left">

                      <div className="navbar-small-left-logo">

                      </div>
                    </div>
                    <div className="navbar-small-right">

                      <div className="navbar-small-right-linkedinoauth">
                        <LinkedInOAuth />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </NavbarContainerSmall>
    );
  }
}

NavbarSmall.propTypes = {
  // params: PropTypes.object,
  // breadcrumbs: PropTypes.any,
  // sidebar: PropTypes.any,
  // navigateToBrand: PropTypes.func,
  // isLocalNetworkPage: PropTypes.bool,
  // noSearchBar: PropTypes.bool,
  // isSuperBowlPage: PropTypes.bool
};

export default withRouter(NavbarSmall);