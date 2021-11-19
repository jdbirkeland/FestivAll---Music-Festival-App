import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/sunday/')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY_SUNDAY', err);
    }
} //end fetchDisplay

//function to delete
function* deleteItem(action) {
    try {
        yield axios.delete(`/api/sunday/${action.payload}`);
        console.log(action.payload);
        yield put({ type: 'FETCH_DISPLAY_SUNDAY' })
    } catch (error) {
        console.log('Error in Delete', error);
    }
} //end deleteItem

//start updateItem
function* updateItem(action) {
    try{
        console.log(action.payload);
        yield axios.put(`api/sunday/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_DISPLAY_SUNDAY'})
    } catch(error) {
        console.log('Error in UPDATE', error);
    }
} //end updateItem


function* sundaySaga() {
    yield takeLatest('FETCH_DISPLAY_SUNDAY', fetchDisplay)
    yield takeLatest('DELETE_ITEM', deleteItem)
    yield takeLatest('EDIT_ITEM', updateItem)
}

export default sundaySaga;