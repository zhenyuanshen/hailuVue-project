import Vue from 'vue'
import Vuex from 'vuex'
import log from "../plugins/utils";

// vuex 操作数据 demo
export default {
  namespaced: true, 
  state: {
    username: 'yivo',
    password: 'pass',
    // 发酵后的产气量与降解率
    test1:{
      headWidth: 280,
      normalWidth: 300,
      label: [
        {
          prop: 'cql',
          lable: '产气量',
        },
        {
          prop: 'jjlyl',
          lable: '降解利用率',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: '空白对照',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-02',
          name: '乳果糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-04',
          name: '棉子糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-01',
          name: '低聚果糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-08',
          name: '低聚半乳糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-06',
          name: '低聚异麦芽糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '低聚甘露糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '低聚木糖',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '菊粉',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '淀粉',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '甘露糖醇',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
        {
          date: '2016-05-07',
          name: '木糖醇',
          province: '上海',
          zip: 200333,
          cql: 100,
          jjlyl: 100,
        },
      ],
    },
    // 发酵后的短链脂肪酸
    test2:{
      headWidth: 100,
      normalWidth: 150,
      label: [
        {
          prop: 'zs',
          lable: '总酸',
        },
        {
          prop: 'ys',
          lable: '乙酸',
        },
        {
          prop: 'bs',
          lable: '丙酸',
        },
        {
          prop: 'ds',
          lable: '丁酸',
        },
        {
          prop: 'yds',
          lable: '异丁酸',
        },
        {
          prop: 'ws',
          lable: '戊酸',
        },
        {
          prop: 'yds',
          lable: '异戊酸',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Y 空白对照',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-02',
          name: 'LAU 乳果糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-04',
          name: 'RAF 棉子糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-01',
          name: 'FOS 低聚果糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-08',
          name: 'GOS 低聚半乳糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-06',
          name: 'IMO 低聚异麦芽糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'MOS 低聚甘露糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'XOS 低聚木糖',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'INU 菊粉',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'STA 淀粉',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'MAI 甘露糖醇',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
        {
          date: '2016-05-07',
          name: 'XYI 木糖醇',
          zip: 200333,
          zs: 100,
          ys: 100,
          bs: 100,
          ds: 100,
          yds: 100,
          ws: 100,
          yws: 100,
        },
      ],
    },
    // 发酵后益生菌的检测
    test3:{
      headWidth: 280,
      normalWidth: 300,
      label: [
        {
          prop: 'sqgj',
          lable: '双歧杆菌',
        },
        {
          prop: 'rsj',
          lable: '乳酸菌',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Y',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'LAU',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'RAF',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'FOS',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'GOS',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'IMO',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'MOS',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'XOS',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'INU',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'STA',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'MAI',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
        {
          date: '2016-05-03',
          name: 'XYI',
          zip: 200333,
          sqgj: 100,
          rsj: 100,
        },
      ],
    },
    indexOfTest: 1,
  },
    getters: {
      testDict: function (state) {
        let index = state.indexOfTest
        let key = `test${index}`
        log('testDict', index, key)
        let s = state[key]
        return s
      },
    },
    mutations: {
      changeTest: function (state, index) {
        log('mutations changeTest index=', index)
        state.indexOfTest = index
      }
    },
    actions: {
      actionChangeTest: function (context, index) {
        log('actionChangeTest', context, index)
        context.commit('changeTest', index)
      }
    },
}
