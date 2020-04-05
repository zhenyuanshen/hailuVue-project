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
        <el-col :span="6" v-for="i in sufferInfo">
          <div class="grid-content">
            <div class="content-key">
              {{ i.key }}
            </div>
            <div v-if="i.type === 'no'" class="content-value edit-div" v-text="i.value">
            </div>
            <div v-else-if="i.type === 'test1'" :id="i.index" class="content-value" v-text="i.value" @click="goExam">
            </div>
            <div v-else-if="i.type === 'test2'" :id="i.index" class="content-value" v-text="i.value" @click="goTest">
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6" v-for="i in examInfo">
          <div class="grid-content">
            <div class="content-key">
              {{ i.key }}
              <div v-if="i.type === 'no'" class="content-value" v-text="i.value" contenteditable="true">
              </div>
              <div v-else-if="i.type === 'test1'" :id="i.index" class="content-value" v-text="i.value" @click="goExam">
              </div>
              <div v-else-if="i.type === 'test2'" :id="i.index" class="content-value" v-text="i.value" @click="goTest">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6" v-for="i in testInfo">
          <div class="grid-content">
            <div class="content-key">
              {{ i.key }}
              <div v-if="i.type === 'no'" class="content-value" v-text="i.value">
              </div>
              <div v-else-if="i.type === 'test1'" :id="i.index" class="content-value" v-text="i.value" @click="goExam">
              </div>
              <div v-else-if="i.type === 'test2'" :id="i.index" class="content-value" v-text="i.value" @click="goTest">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <br>
    <el-button type="primary" plain @click="edit">
      编辑
    </el-button>
    <el-button type="primary" plain @click="test">
      提交
    </el-button>
    <el-button type="primary" plain @click="goCenter">
      返回
    </el-button>
  </div>
</template>

<script>
import log from "../../plugins/utils";
import echarts from 'echarts';
import {mapActions} from "vuex";

export default {
  data() {
    return {
      sufferInfo:{
        name: {
          key: '姓名',
          value: '王小虎',
          type: 'no',
        },
        gender: {
          key: '性别',
          value: '男',
          type: 'no',
        },
        age: {
          key: '年龄',
          value: '30',
          type: 'no',
        },
        sampleId: {
          key: '样本编号',
          value: '1',
          type: 'no',
        },
        sampleTime: {
          key: '收样日期',
          value: '2019-10-2',
          type: 'no',
        },
        zjMan: {
          key: '主检人',
          value: '王二虎',
          type: 'no',
        },
        shMan: {
          key: '审核人',
          value: '王三虎',
          type: 'no',
        },
        pzMan: {
          key: '批准人',
          value: '王四虎',
          type: 'no',
        },
      },
      examInfo:{
        exam1: {
          key: '粪便常规生化',
          value: '1',
          type: 'test1',
          index: '1',
        },
        exam2: {
          key: '粪便的短链脂肪酸',
          value: '1',
          type: 'test1',
          index: '2',
        },
        exam3: {
          key: '粪便中的益生菌',
          value: '1',
          type: 'test1',
          index: '3',
        },
      },
      testInfo: {
        test1: {
          key: '发酵后的产气量与降解率',
          value: '1',
          type: 'test2',
          index: '1',
        },
        test2: {
          key: '发酵后的短链脂肪酸',
          value: '1',
          type: 'test2',
          index: '2',
        },
        test3: {
          key: '发酵后益生菌的检测',
          value: '1',
          type: 'test2',
          index: '3',
        },
      },
    }
  },
  computed: {
    infoList() {
      let dict = this.infoTestDict
    }
  },
  mounted: function () {},
  methods: {
    ...mapActions('exam', ['actionChangeExam']),
    ...mapActions('test', ['actionChangeTest']),
    goCenter(event) {
      this.$router.push('/data')
      log('goCenter arguments', event)
    },
    goExam(event) {
      let examId = event.target.innerText
      let path = '/data/exam'
      let qr = {id : examId}
      this.$router.push({
        path: path,
        query: qr,
      })
      let index = event.target.id
      log('goExam', event, index)
      this.actionChangeExam(index)
    },
    goTest(event) {
      let examId = event.target.innerText
      let path = '/data/test'
      let qr = {id : examId}
      this.$router.push({
        path: path,
        query: qr,
      })
      let index = event.target.id
      log('goExam', event, index)
      this.actionChangeExam(index)
    },
    edit(event) {
      let es = document.querySelectorAll('.edit-div')
      for (let e of es) {
        e.contentEditable = "true"
      }
    },
    test(event) {
      let e = document.querySelector('.edit-div')
      log('test', e.innerHTML)
    }
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
     border-radius: 8px;
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
    margin-right: 20px;
  }
</style>
