### React Router学习

#### 1、安装router环境及编写简单的页面

- npm install --save react-router-dom；
- 编写简单的页面，注意：Link 和 Route 组件需要在Router中使用，且名称首字母大写；
- 注意：exact 关键字的使用，`精准匹配`；

        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
            </ul>
            <route path='/' component={Index} exact />
            <route path='/list/' component={List} />
        </Router>


#### 2、路由动态传递参数（this.props.match）

- isExact：是否为精准匹配。
- path:自己定义的路由规则，可以清楚的看到是可以传递id参数的。
- url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
- params：传递过来的参数，key和value值。

路由好像有缓存问题，在List页面，点击路由中的列表链接URL地址会变更，但是页面不刷新，componentDidMount生命周期函数不会触发！！！


#### 3、重定向

- 标签式重定向：就是利用<Redirect />标签来进行重定向，业务逻辑不复杂时建议使用这种。
- 编程式重定向:这种是利用编程的方式，一般用于业务逻辑当中，比如登录成功跳转到会员中心页面。

`注意：`跳转是可以用浏览器的回退按钮返回上一级的，而重定向是不可以的。

`经试验`重定向可以用浏览器返回上一级，反而是跳转`this.props.history.push('/home/')`无法用回退按钮返回上一级。


#### 4、路由












