import { takeEvery, put } from 'redux-saga/effects'
import { GET_LIST_WITH_SAGA } from "./actionTypes";
import { getListAction } from "./actionCreators";
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_LIST_WITH_SAGA, getListActionWithSage)
}

function* getListActionWithSage() {
    console.log('sagas');
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList');
    const action = getListAction(res.data);
    yield put(action);
}

export default mySaga
