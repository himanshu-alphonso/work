import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState ={tasks : []};

const taskReducer = (state = initialState, action) =>{

	switch (action.type) {
		case 'ADD_TASK': 
			state = {tasks : state.tasks.concat([action.task])};
			break;
		case 'DELETE_TASK':
			state=state.splice(action.payload,1); 
			break;
	}
	return state;
}

export default taskReducer;