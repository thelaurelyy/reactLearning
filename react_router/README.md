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


#### 3、








