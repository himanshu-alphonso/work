import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux' ;
import * as actions from '../../containers/App/actions.js';
import { toJS } from 'immutable';

class AddTask extends React.Component{
	render(){
		return(
			<div>
				<input type ="text" ref ="task" placeholder = "Add your task here" />
				<button onClick= {() => this.props.taskAdd(this.refs.task.value)}> Add Task </button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	taskAdd : task => dispatch(actions.taskAdd(task))
});



export default connect(()=>{}, mapDispatchToProps)(AddTask)