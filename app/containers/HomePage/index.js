import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Helmet from 'react-helmet';
import ListTask from 'components/listtask/';
import AddTask from 'components/add-task/';
import Task from 'components/Task/';
import CustomNavbar from 'components/NavBar/';
import HomePageStyles from './style';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePageStyles>
        <Helmet title="Home | Alphonso Boilerplate" />
        <CustomNavbar />
        <Jumbotron>
          <h2>T0-Do App</h2>
        </Jumbotron>
        <Grid>
          <Row>
            <Col>
              <div>
                <AddTask />
              </div>
            </Col>
            <Col>
              <ListTask />
            </Col>
          </Row>
        </Grid>
      </HomePageStyles>
    );
  }
}

export default HomePage;
