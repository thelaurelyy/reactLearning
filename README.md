### 学习React

#### 一、环境搭建和 Hello World 程序

`React.createClass` 注册一个组件HelloComponent，这个组件只包含一个函数render，该函数通过调用React.createElement实现了HTML内容。

`ReactDOM.render()` ReactDOM.render是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点。


#### 二、初始JSX语法

JXS即JavaScript XML，它使用XML标记来创建虚拟DOM和声明组件。

上一节的程序从本质上能完成所有的工作，只是有一些开发效率的问题，比如JavaScript代码与标签混些在一起，缺乏模板支持等等。而使用JSX可以有效解决这些问题。

如果要使用JSX语法的支持，你可以使用Babel来进行转换，但是为了讲解方便我们这里直接引入Babel的核心文件 browser.min.js。

JSX的好处：
- 可以使用熟悉的语法仿照HTML来定义虚拟DOM。
- 程序代码更加直观 
- 于JavaScript之间等价转换，代码更加直观
- JSX是支持表达式的，你只要使用{}括号，就可以使用表达式。


#### 三、进阶JSX语法

- JSX上的数组输出
   - JSX允许直接在模板插入JavaScript变量。如果这个变量是一个数组，则会展开这个数组的所有的成员。


#### 四、React组件：state成员`（重要）`

- React组件可以看做是 `带有props属性集合`和`state状态集合`并且`构造出一个虚拟DOM结构`的`对象`。

- React的一大创新，就是将界面组件看成一个状态机，用户界面拥有不同状态并根据状态进行渲染输出，用户界面和数据始终保持一致。

- setState()通知React组件数据发生变化的方法是调用成员函数setState(date, callback)。
这个函数会`合并`data到this.state，并重新渲染组件。渲染完成后，调用可选的callback回调。（大部分情况下不需要调用回调，因为React会负责把界面更新到最新状态）

- `需要注意的是：`
    1. getInitialState函数必须有返回值，可以是null，false，一个对象。
    2. 访问state数据的方法是"this.state.属性名"。
    3. 变量用{}包裹，不需要再加双引号。

  
#### 五、React组件：props和render成员`（重要）`

- `props`是组件固有的属性的集合，其数据由外部传入，一般在整个组件的生命周期中都是只读的。属性的初始值通常是由React.createElement函数或者JSX中标签的属性值进行传递，并合并到组件实例对象的this.props中。

- 通常固定的组件内只读的、应由父组件传递进来的属性适合放在props集合中，如组件的雷鸣、颜色、字体、事件响应回调函数等。

- props和state的区别：
    - props不能被其所在的组件修改，从父组件传递进来的属性不会在组件内部更改；
    - state只能在所在组件内部更改，或在外部调用setState函数对状态进行间接修改。
   
- render成员函数
    - render是一个函数，对于组件来说，render成员函数是必需的。
    - render函数的主要流程是检测this.props和this.state,再返回一个单一组件实例。
    - render函数应该是纯粹的，也就是说，`在render函数内不应该修改组件state，不读写DOM信息，也不与浏览器交互。如果需要交互，应该在生命周期中进行交互`。(见demo_04)


#### 六、React组件：生命周期`（重要）`

- `一个组件完整的生命周期包含实例化阶段、活动阶段、销毁阶段三个阶段。`每个阶段又由相应的方法管理。

- 过程中涉及三个主要的动作术语：
    - mounting:表示正在挂接虚拟DOM到真实DOM。
    - updating:表示正在被重新渲染。
    - unmounting:表示正在将虚拟DOM移除真实DOM。
    
- 每个动作术语提供两个函数：
    - componentWillMount()
    - componentDidMount()
    - componentWillUpdate(object nextProps, object nextState)
    - componentDidUpdate(object prevProps, object prevState)
    - componentWillUnmount()
    
- **注意：我在编写demo的时候犯了两个错误：**
    - `this.state.count` <br /> 
    变量统一进行状态管理，访问state数据的方法是"this.state.属性名"。而我写成了this.count。
    
    - `this.setState({count: this.state.count+1})` <br>
    调用变更state数据的方法 this.setState({...}) 需要传入对象


#### 七、React练习实例（见demo_07）  

- 切记： getInitialState的返回值只能是null、false、对象  
- this.state.opacity
- this.setState({...})
- this.props.name


#### 八、React组件：this.props.children

- this.props对象的属性与组件的属性一一对应，但有一个例外，就是this.props.children。`它表示组件所有的子节点。`

- 注意：this.props.children的值有三种可能：
    - 1、没有子节点：undefined；
    - 2、一个子节点：数据类型是object；
    - 3、多个子节点：数据类型是array；

- 对this.props.state进行数据处理的时候要小心

- 注意编写格式规范：
    - render函数的返回值最好用 () 括起来；
    - 变量或表达式需要用 {} 包裹；
    













