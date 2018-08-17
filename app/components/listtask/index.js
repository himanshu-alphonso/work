import React from 'react';
import {connect} from 'react-redux';
import { toJS } from 'immutable';

class ListTask extends React.Component{
	constructor(props) {
		super(props)
	}

	render()
	{
		//this.props.tasks.forEach((i) => console.log(i));
		console.log(this.props.tasks.tasks);
		return(
			<ol>
				{this.props.tasks.tasks.map( (task,index) => <li key={index}>{task}</li>)}
			</ol>
		);
	}
}

// const mapStateToProps = (state) => {
// 	try{
// 		return { tasks:state.tasks }
// 	}
// 	catch(e)
// 	{
// 		return state;
// 	}
	
// 	//console.log(state);
// 	return( 
// 	 	tasks: state.get("tasks"),
// 	 )
// };


const mapStateToProps = (state, ownProps) => ({
  	tasks: state.get('tasks'),
});

//mapStateToProps();

export default connect(mapStateToProps)(ListTask)