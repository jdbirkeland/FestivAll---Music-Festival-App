import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/performance')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
        console.log(response.data);
    } catch (err) {
        console.log('Error in FETCH_DISPLAY', err);
    }
} //end fetchDisplay

//function to delete
function* deleteItem(action) {
    try {
        yield axios.delete(`/api/performance/${action.payload}`);
        console.log(action.payload);
        yield put({ type: 'FETCH_DISPLAY' })
    } catch (error) {
        console.log('Error in Delete', error);
    }
} //end deleteItem


function* fridaySaga() {
    yield takeLatest('FETCH_DISPLAY', fetchDisplay)
    yield takeLatest('DELETE_ITEM', deleteItem)
}

export default fridaySaga;