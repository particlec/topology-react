export const Tools = [
  // {
  //   group: 'react组件',
  //   children: [
  //     {
  //       text: '按钮',
  //       icon: 'icon-anniu',
  //       name: 'button',
  //       color: '#f50',
  //       data: {
  //         autoRect: true,
  //         strokeStyle: '#fff',
  //         rect: {
  //           x: 100,
  //           y: 200,
  //           width: 100,
  //           height: 35,
  //         },
  //         hideAnchor: true,
  //         name: 'button',
  //         data: {
  //           // 组件属性配置
  //           props: {
  //             type: 'primary',
  //             children: '查询',
  //           },
  //           // 异步请求配置
  //           http: {
  //             api: '/api/topologies?',
  //             type: 'get',
  //             paramsGetStyle: 'subscribe',
  //             paramsArr: [],
  //           },
  //           // 绑定如图表图例id
  //           bind: [],
  //         },
  //         events: [
  //           {
  //             type: 'doFn',
  //             action: 'Function',
  //             value: `let fun = (a) =>  params + a; fun(123); return 1231;  `,
  //             params: 123,
  //             name: 'onClick',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       text: '日期组件',
  //       icon: 'icon-shijianxuanze',
  //       name: 'datePicker',
  //       data: {
  //         strokeStyle: '#fff',
  //         hideAnchor: true,
  //         rect: {
  //           x: 100,
  //           y: 200,
  //           width: 300,
  //           height: 30,
  //         },
  //         name: 'datePicker',
  //         data: {
  //           props: {
  //             allowClear: true,
  //           },
  //         },
  //         events: [
  //           {
  //             type: 'doFn',
  //             action: 'Function',
  //             value: `let fun = (a) =>  console.log(params + a); fun(123);`,
  //             params: 123,
  //             name: 'onChange',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       text: '输入框文本',
  //       icon: 'icon-shurukuang',
  //       name: 'input',
  //       data: {
  //         strokeStyle: '#fff',
  //         hideAnchor: true,
  //         rect: {
  //           x: 100,
  //           y: 200,
  //           width: 200,
  //           height: 100,
  //         },
  //         name: 'input',
  //         data: {
  //           props: {
  //             allowClear: true,
  //             placeholder: '请输入...',
  //           },
  //         },
  //         events: [
  //           {
  //             type: 'doFn',
  //             action: 'Function',
  //             value: `let fun = (a) =>  console.log(params + a); fun(123);`,
  //             params: 123,
  //             name: 'onChange',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  {
    group: '基本图案',
    children: [
      {
        name: '正方形',
        icon: 'icon-image',
        data: {
          text: 'Topology',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          iconFamily: 'topology',
          image: require('../assets/square.svg').default,
          data: {
            car: 1,
          },
        },
      },
      {
        name: '钢笔(折线)',
        icon: 't-icon t-pen',
        class: '架构拓扑图',
        data: {
          name: 'lines',
          type: 0, //  0- 连线； 1- 节点
          doing: true,
          closePath: true, // 是否闭合
          rect: {
            width: 0,
            height: 0,
          },
        },
        sort: 'a023',
        state: 1,
        base: true,
        subClassId: '183bf0d2',
        subClassName: '基本形状',
      },
    ],
  },
  {
    group: 'react组件',
    children: [
      // {
      //   name: 'text',
      //   icon: 'icon-text',
      //   data: {
      //     text: '我是标签',
      //     rect: {
      //       width: 100,
      //       height: 30,
      //     },
      //     name: 'text',
      //   },
      // },
    ],
  },
  {
    group: '自定义图片',
    children: [
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/sprites.svg').default,
        },
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/site.svg').default,
        },
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/car.svg').default,
          data: {
            car: 1,
          },
        },
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/point.svg').default,
          data: {
            car: 1,
          },
        },
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/charge.svg').default,
          data: {
            car: 1,
          },
        },
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100,
          },
          name: 'image',
          image: require('../assets/warehouse.svg').default,
          data: {
            car: 1,
          },
        },
      },
    ],
  },
  // {
  //   group: '图表控件',
  //   children: [
  //     {
  //       elementRendered: false,
  //       name: '折线图',
  //       icon: 'icon-line-chart',
  //       data: {
  //         text: '折线图',
  //         rect: {
  //           width: 300,
  //           height: 200,
  //         },
  //         name: 'echarts',
  //         data: {
  //           echarts: {
  //             option: {
  //               xAxis: {
  //                 type: 'category',
  //                 data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //               },
  //               yAxis: {
  //                 type: 'value',
  //               },
  //               series: [
  //                 {
  //                   data: [820, 932, 901, 934, 1290, 1330, 1320],
  //                   type: 'line',
  //                 },
  //               ],
  //               seriesFunction: ` return {
  //       color: ['#3398DB'],
  //       tooltip: {
  //         trigger: 'axis',
  //         axisPointer: {
  //           // 坐标轴指示器，坐标轴触发有效
  //           type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
  //         }
  //       },
  //       grid: {
  //         left: '3%',
  //         right: '4%',
  //         bottom: '3%',
  //         containLabel: true
  //       },
  //       xAxis: [
  //         {
  //           type: 'category',
  //           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //           axisTick: {
  //             alignWithLabel: true
  //           }
  //         }
  //       ],
  //       yAxis: [
  //         {
  //           type: 'value'
  //         }
  //       ],
  //       series: [
  //         {
  //           name: '直接访问',
  //           type: 'bar',
  //           barWidth: '60%',
  //           data: [10, 52, 200, 334, 390, 330, 220]
  //         }
  //       ]
  //     }`,
  //             },
  //           },
  //           http: {
  //             api: '/api/topologies?',
  //             type: 'get',
  //             paramsGetStyle: 'subscribe',
  //             paramsArr: [
  //               { key: 'pageIndex', value: 1 },
  //               { key: 'pageCount', value: 10 },
  //             ],
  //           },
  //         },
  //       },
  //     },
  //     {
  //       elementRendered: false,
  //       name: '折线图',
  //       icon: 'icon-line-chart',
  //       data: {
  //         text: '折线图',
  //         rect: {
  //           width: 300,
  //           height: 200,
  //         },
  //         strokeStyle: '#fff',
  //         name: 'echarts',
  //         data: {
  //           echarts: {
  //             option: {
  //               backgroundColor: '#FFF',
  //               legend: {
  //                 data: ['A1班', 'B1班', 'C1班'],
  //                 orient: 'vertical',
  //                 right: '2%',
  //                 top: '5%',
  //               },
  //               grid: {
  //                 top: '9%',
  //                 bottom: '15%',
  //                 left: '6%',
  //                 right: '10%',
  //               },
  //               tooltip: {
  //                 trigger: 'axis',
  //                 label: {
  //                   show: true,
  //                 },
  //               },
  //               xAxis: {
  //                 boundaryGap: true,
  //                 axisLine: {
  //                   show: false,
  //                 },
  //                 splitLine: {
  //                   show: false,
  //                 },
  //                 axisTick: {
  //                   show: false,
  //                   alignWithLabel: true,
  //                 },
  //                 data: [
  //                   '周一',
  //                   '周二',
  //                   '周三',
  //                   '周四',
  //                   '周五',
  //                   '周六',
  //                   '周日',
  //                 ],
  //               },
  //               yAxis: {
  //                 axisLine: {
  //                   show: false,
  //                 },
  //                 splitLine: {
  //                   show: true,
  //                   lineStyle: {
  //                     type: 'dotted',
  //                     color: '#d9d9d9',
  //                   },
  //                 },
  //                 axisTick: {
  //                   show: false,
  //                 },
  //               },
  //               series: [
  //                 {
  //                   name: 'A1班',
  //                   type: 'line',
  //                   symbol: 'circle',
  //                   symbolSize: 7,
  //                   lineStyle: {
  //                     color: 'rgb(33, 148, 246)',
  //                     shadowBlur: 12,
  //                     shadowColor: 'rgb(33, 148, 246,0.9)',
  //                     shadowOffsetX: 1,
  //                     shadowOffsetY: 1,
  //                   },
  //                   itemStyle: {
  //                     color: 'rgb(33, 148, 246)',
  //                     borderWidth: 1,
  //                     borderColor: '#FFF',
  //                   },
  //                   label: {
  //                     show: false,
  //                     distance: 1,
  //                   },
  //                   data: [2000, 1800, 2800, 900, 1600, 2000, 3000],
  //                 },
  //                 {
  //                   name: 'B1班',
  //                   type: 'line',
  //                   symbol: 'circle',
  //                   symbolSize: 7,
  //                   lineStyle: {
  //                     color: 'rgb(78, 203, 115)',
  //                     shadowBlur: 12,
  //                     shadowColor: 'rgb(78, 203, 115,0.9)',
  //                     shadowOffsetX: 1,
  //                     shadowOffsetY: 1,
  //                   },
  //                   itemStyle: {
  //                     color: 'rgb(78, 203, 115)',
  //                     borderWidth: 1,
  //                     borderColor: '#FFF',
  //                   },
  //                   label: {
  //                     show: false,
  //                     distance: 1,
  //                   },
  //                   data: [2900, 1350, 3479, 4126, 3570, 2122, 1256],
  //                 },
  //                 {
  //                   name: 'C1班',
  //                   type: 'line',
  //                   symbol: 'circle',
  //                   symbolSize: 7,
  //                   lineStyle: {
  //                     color: 'rgb(51, 201, 255)',
  //                     shadowBlur: 12,
  //                     shadowColor: 'rgb(51, 201, 255,0.9)',
  //                     shadowOffsetX: 1,
  //                     shadowOffsetY: 1,
  //                   },
  //                   itemStyle: {
  //                     color: 'rgb(51, 201, 255)',
  //                     borderWidth: 1,
  //                     borderColor: '#FFF',
  //                   },
  //                   label: {
  //                     show: false,
  //                     distance: 1,
  //                   },
  //                   data: [3781, 3265, 3289, 3167, 4421, 4312, 3256],
  //                 },
  //               ],
  //               seriesFunction: ` return {
  //       backgroundColor: '#FFF',
  //       legend: {
  //         data: ['A1班', 'B1班', 'C1班'],
  //         orient: 'vertical',
  //         right: '2%',
  //         top: '5%'
  //       },
  //       grid: {
  //         top: '9%',
  //         bottom: '15%',
  //         left: '6%',
  //         right: '10%'
  //       },
  //       tooltip: {
  //         trigger: 'axis',
  //         label: {
  //           show: true
  //         }
  //       },
  //       xAxis: {
  //         boundaryGap: true,
  //         axisLine: {
  //           show: false
  //         },
  //         splitLine: {
  //           show: false
  //         },
  //         axisTick: {
  //           show: false,
  //           alignWithLabel: true
  //         },
  //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  //       },
  //       yAxis: {
  //         axisLine: {
  //           show: false
  //         },
  //         splitLine: {
  //           show: true,
  //           lineStyle: {
  //             type: 'dotted',
  //             color: '#d9d9d9'
  //           }
  //         },
  //         axisTick: {
  //           show: false
  //         }
  //       },
  //       series: [
  //         {
  //           name: 'A1班',
  //           type: 'line',
  //           symbol: 'circle',
  //           symbolSize: 7,
  //           lineStyle: {
  //             color: 'rgb(33, 148, 246)',
  //             shadowBlur: 12,
  //             shadowColor: 'rgb(33, 148, 246,0.9)',
  //             shadowOffsetX: 1,
  //             shadowOffsetY: 1
  //           },
  //           itemStyle: {
  //             color: 'rgb(33, 148, 246)',
  //             borderWidth: 1,
  //             borderColor: '#FFF'
  //           },
  //           label: {
  //             show: false,
  //             distance: 1
  //           },
  //           data: [2000, 1800, 2800, 900, 1600, 2000, 3000]
  //         },
  //         {
  //           name: 'B1班',
  //           type: 'line',
  //           symbol: 'circle',
  //           symbolSize: 7,
  //           lineStyle: {
  //             color: 'rgb(78, 203, 115)',
  //             shadowBlur: 12,
  //             shadowColor: 'rgb(78, 203, 115,0.9)',
  //             shadowOffsetX: 1,
  //             shadowOffsetY: 1
  //           },
  //           itemStyle: {
  //             color: 'rgb(78, 203, 115)',
  //             borderWidth: 1,
  //             borderColor: '#FFF'
  //           },
  //           label: {
  //             show: false,
  //             distance: 1
  //           },
  //           data: [2900, 1350, 3479, 4126, 3570, 2122, 1256]
  //         },
  //         {
  //           name: 'C1班',
  //           type: 'line',
  //           symbol: 'circle',
  //           symbolSize: 7,
  //           lineStyle: {
  //             color: 'rgb(51, 201, 255)',
  //             shadowBlur: 12,
  //             shadowColor: 'rgb(51, 201, 255,0.9)',
  //             shadowOffsetX: 1,
  //             shadowOffsetY: 1
  //           },
  //           itemStyle: {
  //             color: 'rgb(51, 201, 255)',
  //             borderWidth: 1,
  //             borderColor: '#FFF'
  //           },
  //           label: {
  //             show: false,
  //             distance: 1
  //           },
  //           data: [3781, 3265, 3289, 3167, 4421, 4312, 3256]
  //         }
  //       ]
  //     };
  //     `,
  //             },
  //           },
  //           http: {
  //             api: '/api/topologies?',
  //             type: 'get',
  //             paramsGetStyle: 'subscribe',
  //             paramsArr: [
  //               { key: 'pageIndex', value: 1 },
  //               { key: 'pageCount', value: 10 },
  //             ],
  //           },
  //         },
  //       },
  //     },
  //     {
  //       name: '柱状图',
  //       icon: 'icon-bar-chart',
  //       data: {
  //         text: '柱状图',
  //         rect: {
  //           width: 300,
  //           height: 200,
  //         },
  //         name: 'echarts',
  //         data: {
  //           echarts: {
  //             option: {
  //               color: ['#3398DB'],
  //               tooltip: {
  //                 trigger: 'axis',
  //                 axisPointer: {
  //                   // 坐标轴指示器，坐标轴触发有效
  //                   type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
  //                 },
  //               },
  //               grid: {
  //                 left: '3%',
  //                 right: '4%',
  //                 bottom: '3%',
  //                 containLabel: true,
  //               },
  //               xAxis: [
  //                 {
  //                   type: 'category',
  //                   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //                   axisTick: {
  //                     alignWithLabel: true,
  //                   },
  //                 },
  //               ],
  //               yAxis: [
  //                 {
  //                   type: 'value',
  //                 },
  //               ],
  //               series: [
  //                 {
  //                   name: '直接访问',
  //                   type: 'bar',
  //                   barWidth: '60%',
  //                   data: [10, 52, 200, 334, 390, 330, 220],
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       },
  //     },
  //     {
  //       name: '饼图',
  //       icon: 'icon-pie-chart',
  //       data: {
  //         text: '饼图',
  //         rect: {
  //           width: 200,
  //           height: 200,
  //         },
  //         name: 'echarts',
  //         data: {
  //           echarts: {
  //             option: {
  //               tooltip: {
  //                 trigger: 'item',
  //                 formatter: '{a} <br/>{b}: {c} ({d}%)',
  //               },
  //               legend: {
  //                 orient: 'vertical',
  //                 x: 'left',
  //                 data: [
  //                   '直接访问',
  //                   '邮件营销',
  //                   '联盟广告',
  //                   '视频广告',
  //                   '搜索引擎',
  //                 ],
  //               },
  //               series: [
  //                 {
  //                   name: '访问来源',
  //                   type: 'pie',
  //                   radius: ['50%', '70%'],
  //                   avoidLabelOverlap: false,
  //                   label: {
  //                     normal: {
  //                       show: false,
  //                       position: 'center',
  //                     },
  //                     emphasis: {
  //                       show: true,
  //                       textStyle: {
  //                         fontSize: '30',
  //                         fontWeight: 'bold',
  //                       },
  //                     },
  //                   },
  //                   labelLine: {
  //                     normal: {
  //                       show: false,
  //                     },
  //                   },
  //                   data: [
  //                     { value: 335, name: '直接访问' },
  //                     { value: 310, name: '邮件营销' },
  //                     { value: 234, name: '联盟广告' },
  //                     { value: 135, name: '视频广告' },
  //                     { value: 1548, name: '搜索引擎' },
  //                   ],
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       },
  //     },
  //     {
  //       name: '仪表盘',
  //       icon: 'icon-dashboard-chart',
  //       data: {
  //         text: '仪表盘',
  //         rect: {
  //           width: 300,
  //           height: 300,
  //         },
  //         name: 'echarts',
  //         data: {
  //           echarts: {
  //             option: {
  //               tooltip: {
  //                 formatter: '{a} <br/>{b} : {c}%',
  //               },
  //               toolbox: {
  //                 feature: {
  //                   restore: {},
  //                   saveAsImage: {},
  //                 },
  //               },
  //               series: [
  //                 {
  //                   name: '业务指标',
  //                   type: 'gauge',
  //                   detail: { formatter: '{value}%' },
  //                   data: [{ value: 50, name: '完成率' }],
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       },
  //     },
  //   ],
  // },
  {
    group: '活动图',
    children: [
      {
        name: '非交叉节点',
        icon: 'icon-inital',
        data: {
          text: '',
          rect: {
            width: 20,
            height: 20,
          },
          name: 'circle',
          fillStyle: '#555',
          strokeStyle: 'transparent',
          data: {
            crossPoint: 2,
          },
        },
      },
      {
        name: '交叉节点',
        icon: 'icon-final',
        data: {
          text: '',
          rect: {
            width: 25,
            height: 25,
          },
          name: 'activityFinal',
          fillStyle: '#555',
          data: {
            crossPoint: 1,
          },
        },
      },
    ],
  },
];
