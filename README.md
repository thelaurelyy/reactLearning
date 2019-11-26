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

#### 四、React组件：state成员

- React组件可以看做是 `带有props属性集合`和`state状态集合`并且`构造出一个虚拟DOM结构`的`对象`。

- React的一大创新，就是将界面组件看成一个状态机，用户界面拥有不同状态并根据状态进行渲染输出，用户界面和数据始终保持一致。

- setState()通知React组件数据发生变化的方法是调用成员函数setState(date, callback)。
这个函数会`合并`data到this.state，并重新渲染组件。渲染完成后，调用可选的callback回调。（大部分情况下不需要调用回调，因为React会负责把界面更新到最新状态）

- `需要注意的是：`
    1. getInitialState函数必须有返回值，可以是null，false，一个对象。
    2. 访问state数据的方法是"this.state.属性名"。
    3. 变量用{}包裹，不需要再加双引号。
    








