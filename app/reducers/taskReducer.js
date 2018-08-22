import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState ={ data: [] };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
        state = { data: state.data.concat([action.task]) };
        break;
    case 'DELETE_TASK':
        state = { data: state.data.slice(0, action.payload).concat(state.data.slice(action.payload+1)) };
        break;
    default :
        return state;
  }
  return state;
};

export default taskReducer;
