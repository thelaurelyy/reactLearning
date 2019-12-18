const defaultState = {
    inputValue: 'react-redux',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_item') {
        console.log('add_item')
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'delete_item') {
        console.log('delete_item')
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}
