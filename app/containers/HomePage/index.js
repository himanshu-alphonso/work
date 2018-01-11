import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


class HomePage extends React.Component {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

export default HomePage;
