import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState ={tasks : []};

const taskReducer = (state = initialState, action) =>{

	switch (action.type) {
		case 'ADD_TASK': 
			state = {tasks : state.tasks.concat([action.task])};
			break;
		case 'DELETE_TASK':
			//console.log(action.payload);
			//state = {tasks :  state.tasks.filter(item => state.tasks.indexOf(item) !== action.payload)};
			//state = {tasks : state.tasks.splice(action.payload ,1) }; 
			state = {tasks : state.tasks.slice(0,action.payload).concat(state.tasks.slice(action.payload+1))};
			break;
	}
	return state;
}

export default taskReducer;