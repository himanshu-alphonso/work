import 'whatwg-fetch';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { ADD_TASK } from 'containers/App/actions';
import { SAGA } from './constants';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function request(url) {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON);
}

export function* actOnAction()
{
  // console.log('Acted on addTask saga');
  try {
    // const response = yield call(fetch, 'api.openweathermap.org/data/2.5/weather?id=7c80f43fed08cab52acea991b4b8776e');
    // const response = yield request(
    //  'https://jsonplaceholder.typicode.com/posts')
    //  .then((res) => { console.log(JSON.stringif(res)); });

    let result = null;
    yield request(
     'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7c80f43fed08cab52acea991b4b8776e').then((data) => {
       result =JSON.stringify(data);
     });

     yield put({ type: SAGA, data: result });

    // const response=yield request('https://jsonplaceholder.typicode.com/posts');


  //  yield put({type: SAGA});

  //  yield put({type : 'web-app-boilerplate/app/reducers/taskReducer/SAGA', response: JSON.stringify(response)});
  } catch (e)
  {
    console.log('error in get' + e);
  }
}

export function* watchCreateLessions()
{
  yield takeEvery('ADD_TASK', actOnAction);
}

export default [
  watchCreateLessions,
];
