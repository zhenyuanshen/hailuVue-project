import Vue from 'vue'
import Vuex from 'vuex'
import log from "../plugins/utils";

// vuex 操作数据 demo
export default {
  namespaced: true,
  state: {
    username: 'yivo',
    password: 'pass',
    exam1: {
      name: {
        key: '样本编号',
        value: '1',
        type: 'no',
      },
      gender: {
        key: '检测时间',
        value: '2019-10-2',
        type: 'no',
      },
      age: {
        key: '检测人',
        value: '王二虎',
        type: 'no',
      },
      numOfExam: {
        key: '样本类型',
        value: '粪便',
        type: 'no',
      },
      timeOfExam: {
        key: '颜色',
        value: '黑',
        type: 'no',
      },
      sampleId: {
        key: '松软程度',
        value: '软',
        type: 'no',
      },
      sampleTime: {
        key: '布里斯托分类',
        value: '测试',
        type: 'no',
      },
      zjMan: {
        key: '潜血双联-Tf',
        value: '1.0',
        type: 'no',
      },
      shMan: {
        key: '潜血双联-Hb',
        value: '1.2',
        type: 'no',
      },
      pzMan: {
        key: '钙卫蛋白',
        alue: '1.3',
        type: 'no',
      },
      f100: {
        key: '幽门螺旋杆菌（HP）',
        value: '1.4',
        type: 'no',
      },
      xx: {
        key: '粪氨',
        value: '1.5',
        type: 'no',
      },
      xy: {
        key: '粪总胆汁酸',
        value: '1.6',
        type: 'no',
      },
    },
    exam2: {
      name: {
        key: '样本编号',
        value: '1',
        type: 'no',
      },
      gender: {
        key: '检测时间',
        value: '2019-10-10',
        type: 'no',
      },
      age: {
        key: '检测人',
        value: '王二虎',
        type: 'no',
      },
      numOfExam: {
        key: '样本类型',
        value: '粪便',
        type: 'no',
      },
      timeOfExam: {
        key: '总酸',
        value: '21',
        type: 'no',
      },
      sampleId: {
        key: '乙酸',
        value: '22',
        type: 'no',
      },
      sampleTime: {
        key: '丙酸',
        value: '23',
        type: 'no',
      },
      zjMan: {
        key: '丁酸',
        value: '25',
        type: 'no',
      },
      shMan: {
        key: '异丁酸',
        value: '33',
        type: 'no',
      },
      pzMan: {
        key: '戊酸',
        value: '11',
        type: 'no',
      },
      f100: {
        key: '异戊酸',
        value: '32',
        type: 'no',
      },
    },
    exam3: {
      name: {
        key: '样本编号',
        value: '1',
        type: 'no',
      },
      gender: {
        key: '检测时间',
        value: '2019-10-2',
        type: 'no',
      },
      age: {
        key: '检测人',
        value: '王二虎',
        type: 'no',
      },
      numOfExam: {
        key: '样本类型',
        value: '测试',
        type: 'no',
      },
      timeOfExam: {
        key: '双歧杆菌',
        value: '22',
        type: 'no',
      },
      sampleId: {
        key: '乳酸杆菌',
        value: '22',
        type: 'no',
      },
    },
    indexOfExam: 1,
  },
  getters: {
    examDict: function (state) {
      let index = state.indexOfExam
      let key = `exam${index}`
      log('examDict', index, key)
      let s = state[key]
      return s
    },
  },
  mutations: {
    changeExam: function (state, index) {
      log('mutations changeExam index=', index)
      state.indexOfExam = index
    }
  },
  actions: {
    actionChangeExam: function (context, index) {
      log('actionChangeExam', context, index)
      context.commit('changeExam', index)
    }
  },
}
