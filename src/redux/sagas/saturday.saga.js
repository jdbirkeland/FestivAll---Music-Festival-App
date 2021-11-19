import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/saturday')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY', err);
    }
} //end fetchDisplay

//function to delete
function* deleteItem(action) {
    try {
        yield axios.delete(`/api/saturday/${action.payload}`);
        console.log(action.payload);
        yield put({ type: 'FETCH_DISPLAY_SATURDAY' })
    } catch (error) {
        console.log('Error in Delete', error);
    }
} //end deleteItem

//start updateItem
function* updateItem(action) {
    try{
        console.log(action.payload);
        yield axios.put(`api/saturday/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_DISPLAY_SATURDAY'})
    } catch(error) {
        console.log('Error in UPDATE', error);
    }
} //end updateItem


function* saturdaySaga() {
    yield takeLatest('FETCH_DISPLAY_SATURDAY', fetchDisplay)
    yield takeLatest('DELETE_ITEM', deleteItem)
    yield takeLatest('EDIT_ITEM', updateItem)
}

export default saturdaySaga;