<template>
<!-- API商品列表数据(1.8.1) -->
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>检测者信息</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getDataTable">
                        <el-button slot="append" icon="el-icon-search" @click="getDataTable"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" @click="newAddsuffer">新增</el-button>
                </el-col>
                <el-col :span="3">
                  <!-- 导出Excel -->
                  <el-button type="primary" icon="el-icon-download" size="mini" @click="exportToExcel">批量导出</el-button>
                </el-col>
            </el-row>

            <!-- table表格区域 -->
            <el-table :data="datatable" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="姓名" prop="name" width="130px"></el-table-column>
                <el-table-column label="性别" prop="gender" width="130px"></el-table-column>
                <el-table-column label="年龄" prop="age" width="130px"></el-table-column>
                <el-table-column label="城市" prop="address" width="130px"></el-table-column>
                <el-table-column label="检测次数" prop="examTimes" width="130px"></el-table-column>
                <el-table-column label="最近检测日期" prop="latestExamDate" width="200px"></el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="newSufferdetail" type="primary" size="mini">
                        详情
                      </el-button>
                      <el-button @click="removeById(scope.row.id)" type="danger" size="mini">
                        移除
                      </el-button>      
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[5, 10, 15, 20]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="100" background>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import log from "../../plugins/utils";

export default {
  name: 'DataTable',
  data() {
    return {
      // 查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      // 商品列表
      //datatable: [],
      // 总数据条数
      total: 0,
      datatable: [
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 1
        },
        {
          name: '王大虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 2
        },
        {
          name: '王二虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 3
        },
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 4
        },
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 5
        },
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 6
        },
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 7
        },
        {
          name: '王小虎',
          gender: '男',
          age: '上海',
          address: '杭州',
          examTimes: '5',
          latestExamDate: '2019-10-10',
          id: 8
        },
      ]
    }
  },
  created() {
    this.getDataTable()
  },
  methods: {
    //根据分页获取对应的商品列表
    async getDataTable() {
      const { data: res } = await this.$http.get('datatable', {
        params: this.queryInfo
      })
      //到时候看API接口的情况而定
      if (res.meta.status == 200) {
        return this.$message.error('获取检测者基本信息失败！')
      }

      this.$message.success('获取检测者基本信息成功！')
      console.log(res.data)
      //this.datatable = res.data.goods
      //this.total = res.data.total
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getDataTable()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getDataTable()
    },
    async removeById(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该商品, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
         }
      ).catch(err => err)

      if (confirmResult !== 'confirm') {
        return this.$message.info('已经取消删除！')
      }
      //请求API（1.8.5）
      const { data: res } = await this.$http.delete(`datatable/${id}`)
      //服务器返回状态码为200，表示删除成功
      if (res.meta.status !== 200) {
        return this.$message.error('删除失败！')
      }

      his.$message.success('删除成功！')
      this.getDataTable()
    },
    newAddsuffer() {
      this.$router.push('/data/add')
    },
    newSufferdetail() {
      this.$router.push('/data/detail')
    },
    // 导出Excel
    exportToExcel() {
      require.ensure([], () => {
         const {
           export_json_to_excel
         } = require("../../excel/Export2Excel");
         const tHeader = [
           "id",
           "姓名",
           "性别",
           "年龄",
           "城市",
           "检测次数",
           "最近检测日期"
         ];
         const filterVal = [
           "id",
           "name",
           "gender",
           "age",
           "address",
           "examTimes",
           "latestExamDate"
         ];
         const list = this.datatable;
         const data = this.formatJson(filterVal,list);
         export_json_to_excel(tHeader, data, "检测者信息表");
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
}
</script>

<style lang="less" scoped>
</style>
