import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

//addItem Function
function* addItem(action) {
    console.log('In addItem');

    try{
        console.log('addItem in try');

        yield axios.post('/api/friday', action.payload)
        yield put({type: 'FETCH_DISPLAY'})
    } catch (err) {
        console.log('ERRRRROOOORRRRR, err');
        yield put ({type: 'ERROR in addItem saga'})
    }
} //end addItem

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem)
}

export default addItemSaga;