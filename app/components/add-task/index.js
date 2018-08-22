import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toJS } from 'immutable';
import PropTypes from 'prop-types';
import * as actions from '../../containers/App/actions.js';


class AddTask extends React.Component {
  render() {
  console.log(this.props.sagaResponce);
  return (
    <div>
      <input type="text" ref="task" placeholder="Add your task here" />
      <button onClick={() => this.props.taskAdd(this.refs.task.value)}> Add Task </button>
      <p>{this.props.sagaResponce.sagaData}</p>
    </div>
  );
  }
}

AddTask.propTypes= {
  taskAdd: React.PropTypes.func.isRequired,
  sagaResponce: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  sagaResponce: state.get('sagaResponce'),
});

const mapDispatchToProps = dispatch => ({
  taskAdd: task => dispatch(actions.taskAdd(task))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
