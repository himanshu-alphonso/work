import React from 'react';
import { connect } from 'react-redux';
import { toJS } from 'immutable';
import Task from 'components/Task/';

class ListTask extends React.Component {
  constructor(props) {
  super(props);
  }

  render()
  {
  // this.props.tasks.forEach((i) => console.log(i));
  // {this.props.tasks.tasks.map( (task,index) => <li key={index}>{task}</li>)}
  return (
    <ol>
      {this.props.tasks.data.map((task, index) => <Task key={index} task={task} id={index} />)}
    </ol>
  );
  }
}

ListTask.propTypes= {
  tasks: React.PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => ({
  tasks: state.get('tasks'),
});

// mapStateToProps();

export default connect(mapStateToProps)(ListTask);
