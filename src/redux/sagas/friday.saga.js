import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/friday')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY', err);
    }
} //end fetchDisplay

function* displaySaga() {
    yield takeLatest('FETCH_DISPLAY', fetchDisplay)
}

export default fridaySaga;