import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>Home Page Placeholder</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
