import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux' ;
import * as actions from '../../containers/App/actions.js';

class Task extends React.Component {
	render(){
		//console.log(this.props.id);
		return (
			<tr>
				<td>
					{this.props.task}
				</td>
				<td>
					<button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
				</td>
			</tr>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	deleteTask : task_id => dispatch(actions.deleteTask(task_id))
});



export default connect(()=>{}, mapDispatchToProps)(Task);