import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskStyle from 'components/Task/TaskStyles';
import * as actions from '../../containers/App/actions.js';

class Task extends React.Component {
  render() {
  // console.log(this.props.id);

  return (
    <TaskStyle>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{this.props.task}</th>
            <th> <button onClick={() => { this.props.deleteTask(this.props.id); }}>Delete</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  </TaskStyle>
  );
  }
}
Task.propTypes= {
  task: React.PropTypes.string.isRequired,
  deleteTask: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
};
const mapDispatchToProps = dispatch => ({
  deleteTask: taskId => dispatch(actions.deleteTask(taskId))
});


export default connect(() => {}, mapDispatchToProps)(Task);
