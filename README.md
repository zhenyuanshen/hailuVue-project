## demo1
```
- 基于 Vue + Vuex + VueRouter + Sass + Element + Axios 搭建的个人空间
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
```

### 用户管理
```

```
### 权限管理
```

```
### 数据管理
```

```
### 数据分析
```

```
