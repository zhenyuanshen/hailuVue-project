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
      <el-row :gutter="20">
        <el-col :span="6" v-for="i in examDict" :key="i.key">
          <div class="grid-content">
            <div class="content-key">
              {{ i.key }}
            </div>
            <div v-if="i.type === 'no'" class="content-value" v-text="i.value">
            </div>
            <div v-else-if="i.type === 'click'" class="content-value" v-text="i.value" @click="goExam">
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-button type="primary" plain @click="back">
      返回
    </el-button>
  </div>
</template>

<script>
  import log from "../../plugins/utils";
  import echarts from 'echarts'
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('exam', ['examDict'])
    },
    mounted: function () {
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 50px;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content-value {
    padding-top: 5px;
  }
  .el-input {
    width: 150px;
    margin-top: 10px;
  }
  .el-button {
  float: right;
  margin-top: 20px;
  }
</style>
