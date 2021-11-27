import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/favorites')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY_FAVOIRTES', err);
    }
} //end fetchDisplay

function* favoritesSaga() {
    yield takeLatest('FETCH_DISPLAY_FAVORITES', fetchDisplay)
}

export default favoritesSaga;