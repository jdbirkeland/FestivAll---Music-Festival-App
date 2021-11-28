import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//function to display items from db on DOM for friday
function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/favorites')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY_FAVORITES', err);
    }
} //end fetchDisplay

// //addItemFav Function
// function* addItemFav(action) {
//     console.log('In addItemFav');

//     try{
//         console.log('addItem in try');

//         yield axios.post('/api/favorites', action.payload)
//         yield put({type: 'FETCH_DISPLAY_FAVORITES'})
//     } catch (err) {
//         console.log('ERRRRROOOORRRRR, err');
//         yield put ({type: 'ERROR in addItem saga'})
//     }
// } //end addItemFav

function* favoritesSaga() {
    yield takeLatest('FETCH_DISPLAY_FAVORITES', fetchDisplay)
    // yield takeLatest('ADD_ITEM_FAVORITES', addItemFav)
}

export default favoritesSaga;