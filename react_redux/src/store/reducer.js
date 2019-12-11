import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

// 默认数据
const defaultState = {
    inputValue: 'Write Something For Test',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};

// 暴露出一个方法函数
export default (state = defaultState, action) => {
    // console.log('state--->', state); // 原始仓库中的状态
    // console.log('action--->', action); // action新传递的状态

    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state 重要！
        newState.inputValue = action.value;
        return newState
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state
}
