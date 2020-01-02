import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import TodoListStateless from "./TodoListStateless";
import { Provider } from "react-redux";
import store from "./store";

const App = (
    <Provider store={store}>
        <TodoListStateless />
    </Provider>
);

ReactDOM.render( App, document.getElementById('root'));

