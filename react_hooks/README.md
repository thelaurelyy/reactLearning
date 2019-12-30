### React-Hooks

- 1、useState 是react自带的一个钩子函数，它的作用是用来声明状态变量；
- 2、React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序；
- 3、useEffect两个注意点：
    
    - （1）React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前我们需要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)；
    
    - （2）useEffect中定义的函数的执行不会阻碍浏览器更新视图，即这些函数是异步执行的，而componentDidMount和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。

    - （3）每次状态发生变化时，useEffect都进行了解绑；如果第二个参数传递空数组，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数；

    - （4）useContext的作用就是 `对它所包含的组件树` 提供 `全局共享数据`。


- 4、使用useContext和useReducer实现Redux时的注意事项：    

   - （1）Color是入参为props的箭头函数： 
    
    
    export const Color = props => {
        const [ color, dispatch ] = useReducer(reducer, 'blue')
        return (
            <ColorContext.Provider value={{color, dispatch}}>
                {props.children}
            </ColorContext.Provider>
        )
    }
    
   - （2）使用中括号进行`useReducer`结构赋值；
   
    const [ color, dispatch ] = useReducer(reducer, 'blue')
    
   - （3）给子组件传值，在标签内部使用`{props.children}`
   
    <ColorContext.Provider value={{color, dispatch}}>
       {props.children}
    </ColorContext.Provider>
