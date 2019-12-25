### React-Redux

        export default connect(stateToProps,dispatchToProps)(TodoList);
        
connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，让代码更加清晰和易于维护。
这也是React-Redux最大的优点。
