<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>数据详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <div id="data-center">
        <el-table :data="testDict.tableData" style="width: 100%" stripe max-height="400">
          <el-table-column fixed prop="name" label="" :width="testDict.headWidth">
          </el-table-column>
          <el-table-column v-for="i in testDict.label" :prop="i.prop" :label="i.lable" :width="testDict.normalWidth">
          </el-table-column>
        </el-table>
      </div>
    </el-card> 
    <el-button type="primary" plain id="new-button" @click="back">返回</el-button>
  </div>
</template>

<script>
  import log from "../../plugins/utils";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters('test', ['testDict'])
    },
    methods: {
      back(event) {
        this.$router.back()
        log('back arguments', event)
      },
    }
  }
</script>

<style lang="less" scoped>
  .el-table {
    margin-top: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

  #new-button {
    float: right;
    margin-top: 20px;
  }
</style>
