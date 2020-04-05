<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/hailu.png" alt="">
        <span>海路医疗科技数据管理分析系统</span>
      </div>
      <el-button type="primary" plain @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#CBE8FA" text-color="#1D2089" active-text-color="#409EFF" :unique-opened="true" :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="$route.path" >
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="iconfont icon-users"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item index="/general_users">
              <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>普通用户</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/administrator">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>管理员</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-tijikongjian"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/rights">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>管理员权限</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-danju"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="/data">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据中心</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-baobiao"></i>
              <span>数据分析</span>
            </template>
            <!-- 二级标题 -->
            <el-menu-item index="/analysis">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>统计分析</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/report">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>分析报告</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}

</script>
<style lang="less" scoped>
.home-container{
  height: 100%;
}
.el-header {
  background-color: #CBE8FA;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #1D2089;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #CBE8FA;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
//为每个图标定义类名
.iconfont{
  margin-right: 10px;
}

.toggle-button {
  background-color: #B9DEFA;
  font-size: 10px;
  line-height: 24px;
  color: #1D2089;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
