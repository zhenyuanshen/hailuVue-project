<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据分析</el-breadcrumb-item>
            <el-breadcrumb-item>统计分析</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
            <div id="pie"></div>
            <div id="id-heatmap"></div>
            <div id="cluster"></div>
            <div id="regression"></div>
        </el-card>
    </div>
</template>

<script>
import ecStat from 'echarts-stat'
import echarts from 'echarts'
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawPie()
    this.drawHeatMap()
    this.drawCluster()
    this.drawRegression()
  },
  methods: {
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('pie'))
      // 绘制图表
      var option = {
        title: { 
          text: '粪便的短链脂肪酸',
          subtext: '测试',
          x:'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['乙酸','丙酸','丁酸','异丁酸','戊酸','异戊酸']
        },
        series: [{
          name: '粪便的短链脂肪酸',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
            {value:56, name:'总酸'},
            {value:33, name:'乙酸'},
            {value:12, name:'丙酸'},
            {value:5, name:'丁酸'},
            {value:1, name:'异丁酸'},
            {value:1, name:'戊酸'},
            {value:2, name:'异戊酸'},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              hadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      myChart.setOption(option);
    },

    drawHeatMap() {
      var myChart = this.$echarts.init(document.getElementById('id-heatmap'))

      var hours = ['y', 'lau', 'rfu', 'fos', 'gos', 'imo', 'mos', 'xos', 'inu', 'sta','mai','xyi'];
      var days = ['zs', 'ys', 'bs', 'ds', 'yds', 'ws', 'yws'];
      var data = [
        [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],
        [1,0,7],[1,1,0],[1,2,1],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],
        [2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,2],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],
        [3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,13],[3,6,16],[3,7,0],[3,8,1],[3,9,0],[3,10,5],
        [4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,22],[4,7,0],[4,8,0],[4,9,2],[4,10,4],
        [5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],
        [6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1]
      ];
      data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
      });

      var option = {
        tooltip: {
          position: 'top'
        },
        title: {
          text: '发酵后的短链脂肪酸',
          subtext: '热力图'
        },
        animation: false,
        grid: {
          height: '50%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 30,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      myChart.setOption(option);
    },
    // 聚类图
    drawCluster() {
      var myChart = this.$echarts.init(document.getElementById('cluster'));
      var data = [
        [3.275154, 2.957587],
        [-3.344465, 2.603513],
        [0.355083, -3.376585],
        [1.852435, 3.547351],
        [-2.078973, 2.552013],
        [-0.993756, -0.884433],
        [2.682252, 4.007573],
        [-3.087776, 2.878713],
        [-1.565978, -1.256985],
        [2.441611, 0.444826],
        [-0.659487, 3.111284],
        [-0.459601, -2.618005],
        [2.17768, 2.387793],
        [-2.920969, 2.917485],
        [-0.028814, -4.168078],
        [3.625746, 2.119041],
        [-3.912363, 1.325108],
        [-0.551694, -2.814223],
        [2.855808, 3.483301],
        [-3.594448, 2.856651],
        [0.421993, -2.372646],
        [1.650821, 3.407572],
        [-2.082902, 3.384412],
        [-0.718809, -2.492514],
        [4.513623, 3.841029],
        [-4.822011, 4.607049],
        [-0.656297, -1.449872],
        [1.919901, 4.439368],
        [-3.287749, 3.918836],
        [-1.576936, -2.977622],
        [3.598143, 1.97597],
        [-3.977329, 4.900932],
        [-1.79108, -2.184517],
        [3.914654, 3.559303],
        [-1.910108, 4.166946],
        [-1.226597, -3.317889],
        [1.148946, 3.345138],
        [-2.113864, 3.548172],
        [0.845762, -3.589788],
        [2.629062, 3.535831],
        [-1.640717, 2.990517],
        [-1.881012, -2.485405],
        [4.606999, 3.510312],
        [-4.366462, 4.023316],
        [0.765015, -3.00127],
        [3.121904, 2.173988],
        [-4.025139, 4.65231],
        [-0.559558, -3.840539],
        [4.376754, 4.863579],
        [-1.874308, 4.032237],
        [-0.089337, -3.026809],
        [3.997787, 2.518662],
        [-3.082978, 2.884822],
        [0.845235, -3.454465],
        [1.327224, 3.358778],
        [-2.889949, 3.596178],
        [-0.966018, -2.839827],
        [2.960769, 3.079555],
        [-3.275518, 1.577068],
        [0.639276, -3.41284]
      ];
      var option;
      var clusterNumber = 6;
      var step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
      var result;

      option = {
        timeline: {
          top: 'center',
          inverse: true,
          playInterval: 2500,
          symbol: 'none',
          orient: 'vertical',
          axisType: 'category',
          autoPlay: true,
          label: {
            normal: {
              show: false
            }
          },
          data: []
        },
        baseOption: {
          title: {
            text: 'Process of Clustering',
            subtext: '',
            sublink: 'https://github.com/ecomfe/echarts-stat',
            left: 'center'
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            type: 'scatter'
          }]
        },
        options: []
      };
 
      for(let i = 0; !(result = step.next()).isEnd; i++) {
 
        option.options.push(getOption(i,result, clusterNumber));
        option.timeline.data.push(i + '');
 
      }
 
      function getOption(i,result, k) {
        let clusterAssment = result.clusterAssment;
        let centroids = result.centroids;
        let ptsInCluster = result.pointsInCluster;
        let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
        let series = [];
        for(i = 0; i < k; i++) {
          series.push({
            name: 'scatter' + i,
            type: 'scatter',
            animation: false,
            data: ptsInCluster[i],
            markPoint: {
              symbolSize: 29,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true,
                  position: 'top',
                  formatter: function(params) {
                    return Math.round(params.data.coord[0] * 100) / 100 + '  ' +
                      Math.round(params.data.coord[1] * 100) / 100 + ' ';
                  },
                  textStyle: {
                    color: '#000'
                  }
                }
              },
              itemStyle: {
                normal: {
                  opacity: 0.7
                }
              },
              data: [{
                coord: centroids[i]
              }]
            }
          });
        }
 
        return {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          series: series,
          color: color
        };
      }
      myChart.setOption(option);
    },
    // 回归
    drawRegression() {
      var myChart = this.$echarts.init(document.getElementById('regression'))
      var data0 = [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
      ];
      var data1 = [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
      ];
      var data = [
        [28604, 77],
        [31163, 77.4],
        [1516, 68],
        [13670, 74.7],
        [28599, 75],
        [29476, 77.1],
        [31476, 75.4],
        [28666, 78.1],
        [1777, 57.7],
        [29550, 79.1],
        [2076, 67.9],
        [12087, 72],
        [24021, 75.4],
        [43296, 76.8],
        [10088, 70.8],
        [19349, 69.6],
        [10670, 67.3],
        [26424, 75.7],
        [37062, 75.4],
        [44056, 81.8],
        [43294, 81.7],
        [13334, 76.9],
        [21291, 78.5],
        [38923, 80.8],
        [37599, 81.9],
        [44053, 81.1],
        [42182, 82.8],
        [5903, 66.8],
        [36162, 83.5],
        [1390, 71.4],
        [34644, 80.7],
        [34186, 80.6],
        [64304, 81.6],
        [24787, 77.3],
        [23038, 73.13],
        [19360, 76.5],
        [38225, 81.4],
        [53354, 79.1]
      ];
      var myRegression = ecStat.regression('logarithmic', data);

      myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
      });

      myChart.setOption({
        legend: {
          data: ['1990', '2015']
        },
        title: {
          text: 'Process of Regression',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
        },
        series: [{
          name: '1990',
          type: 'scatter',
          symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
          },
          label: {
            emphasis: {
              show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: 'top'
            }
          },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(251, 118, 123)'
                }, {
                      offset: 1,
                      color: 'rgb(204, 46, 72)'
                }])
              }
            },
            data: data0
        }, {
            name: '2015',
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(129, 227, 238)'
                }, {
                      offset: 1,
                      color: 'rgb(25, 183, 207)'
                }])
              }
            },
            data: data1
        }, {
            name: 'line',
            type: 'line',
            lineStyle: {
              normal: {
                color: '#2f4554'
              }
            },
            smooth: true,
            showSymbol: false,
            data: myRegression.points,
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'left',
                  formatter: myRegression.expression,
                  textStyle: {
                    color: '#333',
                    fontSize: 14
                  }
                }
              },
              data: [{
                coord: myRegression.points[myRegression.points.length - 1]
              }]
            }
        }]
      })
    }
  }
}
</script>

<style lang="less" scoped>
#pie {
  width: 500px;
  height: 600px;
  float: left;
}
#id-heatmap {
  width: 500px;
  height: 600px;
  float: right;
}
#cluster {
  width: 500px;
  height: 550px;
  float: left;
}
#regression {
  width: 500px;
  height: 550px;
  float: right;
}
</style>
