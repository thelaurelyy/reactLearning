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
    return state
}
