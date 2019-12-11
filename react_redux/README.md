###  Redux 学习笔记

1、初始化安装redux

2、创建store 和 reducer

3、从state中读取数据展示在界面上

4、将UI交互的数据发布为action，reducer接收state，管理并返回数据
UI层订阅接收数据，修改state并展示在界面上

`注意：`

- 1、reducer只能接收state，不能修改state，因此必须创建一个新变量（深拷贝state）
在新变量基础上修改参数并回传数据对象；    

- 2、关于界面的订阅，需要为store订阅storeChange（接收数据变更的方法）

- 3、在storeChange方法中通过store.getState()获取更新后的数据，
并通过this.setState()更新状态

> 新手最容易犯的错误：
>
> 1、store必须是唯一的，多个store是坚决不允许，只能有一个store空间；
>
> 2、只有store能改变自己的内容，reducer只能接收和传递新的变量，不能改变原状态；
>
> 3、Reducer必须是纯函数
