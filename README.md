## demo1
```
- 基于 Vue + Vuex + VueRouter + Sass + Element + Axios 搭建的个人空间
- 单页组件构建的 SPA 项目, 主 APP 入口下, 有 4 个子 App
- 
- 
```
## 项目初始化
```
后台项目的环境安装配置
1. 安装MySQL数据库（安装PHP，把mydb.sql还原成一个真正的数据库
MySQL管理器——MySQL导入导出——MySQL的密码是root——选择还原的文件（vue_api_server——db——mydb.sql）——还原到的数据库名称（mydb）——导入）

2. 安装Node.js环境（因为使用的后台API接口依赖于Node.js）
打开PoweShell终端，cd到后台的API项目（这里用的是vue_api_server文件夹），输入npm install命令，(node ./app.js)运行API接口项目

3. 使用Postman测试后台项目接口是否正常
```
![PHP](https://github.com/zhenyuanshen/hailuVue-project/blob/master/images/1.png)
## 实现的主要功能
### 登录退出
```
注：这里的API接口是用的上面的
1. 在登录页面输入用户名和密码
2. 调用后台接口进行验证
3. 通过验证之后，根据后台的响应状态跳转到项目主页
4. http是无状态的，通过token方式维持用户的登录状态（前端后服务器之间存在跨域问题）
5. 销毁本地的token，实现退出功能
// 清空token
window.sessionStorage.clear()
// 跳转到登录页面
this.$router.push('/login')
```
![login](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/login.png)
### 用户管理
```
普通用户列表和管理员列表
1. 可以对用户的的基本信息进行查询，修改，删除等操作
2. 可以增加新的用户
```
![list](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/list.png)
![revise](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/revise.png)
![increase](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/increase.png)
### 权限管理
```
还没有设置
1. 设置管理员权限（一级权限，二级权限...）
```
### 数据管理
```
这部分基本上和fe文件中的一样
1. 实现数据的展示，查询，移除
2. 可以进行添加数据的操作（添加数据采用的是步骤条）
3. 批量导出数据（xlsx格式）
在src目录下新增Excel文件夹，里面包含Blob.js和Export2Excel.js
安装三个依赖
npm install -S file-saver
npm install -S xlsx
npm install -D script-loader
进行方法调用即可
```
![data](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/data.png)
![detail](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/detail.png)
![increase2](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/increase2.png)
![download](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/download.png)
### 数据分析
```
1. 实现数据的统计分析（简单的统计分析，相关分析，聚类分析，回归分析）
2. 生成对应的分析报告（这个部分没有做）
```
![analysis1](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/analysis1.png)
![analysis2](https://github.com/zhenyuanshen/hailuVue-project/upload/master/images/analysis2.png)
