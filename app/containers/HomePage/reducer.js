import { fromJS } from 'immutable';
import { SAGA } from './constants';
const initialState = fromJS({
  sagaData: {},
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SAGA:
      state = { sagaData: action.data };
      break;
    default:
      return state;
  }
  return state;
}

export default homePageReducer;
