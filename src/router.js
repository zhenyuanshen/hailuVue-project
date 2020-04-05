import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './views/Home.vue'
import Welcome from './components/welcome.vue'
import Users from './components/user/Users.vue'
import Administrator from './components/user/Administrator.vue'
import DataTable from './components/data/DataTable.vue'
import Add from './components/data/Add.vue'
import SufferDetail from './components/data/SufferDetail.vue'
import ExamDetail from './components/data/ExamDetail.vue'
import TestTable from './components/data/TestTable.vue'
import Analysis from './components/report/Analysis.vue'
import Report from './components/report/Report.vue'
import Rights from './components/rights/Rights.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/general_users', component: Users },
        { path: '/administrator', component: Administrator },
        { path: '/data', component: DataTable },
        { path: '/data/add', component: Add },
        { path: '/data/detail', component: SufferDetail },
        { path: '/data/exam', component: ExamDetail },
        { path: '/data/test', component: TestTable },
        { path: '/analysis', component: Analysis },
        { path: '/report', component: Report },
        { path: '/rights', component: Rights }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
