import {  put, takeEvery,  all,call } from 'redux-saga/effects';
import {ADD_TASK} from './containers/App/actions.js';
//import {takeEvery} from 'redux-saga';
//import axios from 'axios';

function fetchData() {
	try{
		const response = fetch("https://openweathermap.org/api");
		console.log(response);
		return response;
	} catch(e)
	{
		console.log(e); 
	}
}
export function* actOnAction()
{
	console.log("Acted on addTask saga");
	try{
		const response = yield call(fetchData());
		


	} catch(e)
	{
		console.log("error in get" + e );
	}

}

export function* watchCreateLessions()
{
	console.log("watchCreateLessions is called");
	yield takeEvery('ADD_TASK', actOnAction);
}

export default function* rootSaga() {
  yield all([
      watchCreateLessions(),
  ]);
}