import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import HomePageStyles from './style';
import ListTask from 'components/listtask/';
import AddTask from 'components/add-task/';
import Task from 'components/Task/';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePageStyles>
        <Helmet title="Home | Alphonso Boilerplate" />
        <Grid>
          <Row>
            <Col>
              <h1>TO-DO App</h1>
              <div>
                <AddTask />
                <ListTask />
              </div>
            </Col>
          </Row>
        </Grid>
      </HomePageStyles>
    );
  }
}

export default HomePage;
