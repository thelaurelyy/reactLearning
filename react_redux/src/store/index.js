import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySagas from './sagas'


// 创建增强器
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


// redux-saga 中间件
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware ));
sagaMiddleware.run(mySagas);


// redux-thunk 中间件
// const enhancer = composeEnhancers(applyMiddleware(thunk));


// 创建数据存储仓库
const store = createStore(
    reducer,
    enhancer
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// 暴露出去
export default store

