### 手动创建Next.js项目

#### 第一步：
    建立文件夹，使用 npm init 初始化项目

#### 第二步：安装所需要的依赖包 
    npm install --save react react-dom next
    
#### 第三步：增加快捷命令

     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev" : "next" ,
        "build" : " next build",
        "start" : "next start"
      },
      
#### 第四步：创建pages文件夹及首页文件

    function Index(){
        return (
            <div>Hello Next.js</div>
        )
    }
    export default Index

在根目录下，创建一个pages文件夹，这个文件夹是Next规定的，在这个文件夹下写入的文件，Next.js会自动创建对应的路由。
