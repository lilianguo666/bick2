import React, { Component } from 'react'
import { Card } from 'antd'

// import echartTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class pie extends Component {
    componentWillMount(){
        // echarts.registerTheme('Imooc',echartTheme);
}

  getOption = () =>{
      let option = {
        title:{
          text: '用户骑行订单',
          x:'center'
        },
        legend: {
        orient:'vertical',
        right:10,
        top:20,
        bottom:20,
        data :['周一','周二','周三','周四','周五','周六','周天']
        },
        tooltip:{
          trigger:'item',
          formatter:'{a}<br/>{b}:{c}({d}%)'
        },
        series:[
            {
                name:'订单量',
                type:'pie',
                data:[
                  {
                    value:1000,
                    name:'周一'
                  },
                  {
                    value:2000,
                    name:'周二'
                  },{
                    value:3000,
                    name:'周三'
                  },{
                    value:7000,
                    name:'周四'
                  },{
                    value:6000,
                    name:'周五'
                  },{
                    value:8000,
                    name:'周六'
                  },{
                    value:1000,
                    name:'周天'
                  },
                ]
            }
        ]          

      }  
      return option;
  }  
        getOption2 = () =>{
            let option = {
              title:{
                text: '用户骑行订单',
                x:'center'
              },
              legend: {
              orient:'vertical',
              right:10,
              top:20,
              bottom:20,
              data :['周一','周二','周三','周四','周五','周六','周天']
              },
              tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
              },
              series:[
                  {
                      name:'订单量',
                      type:'pie',
                      radius:["50%","80%"],
                      data:[
                        {
                          value:3000,
                          name:'周一'
                        },
                        {
                          value:3000,
                          name:'周二'
                        },{
                          value:3000,
                          name:'周三'
                        },{
                          value:7000,
                          name:'周四'
                        },{
                          value:6000,
                          name:'周五'
                        },{
                          value:8000,
                          name:'周六'
                        },{
                          value:5000,
                          name:'周天'
                        },
                      ]
                  }
              ] 

            }  
            return option;
        } 
        getOption3 = () =>{
          let option = {
            title:{
              text: '用户骑行订单',
              x:'center'
            },
            legend: {
            orient:'vertical',
            right:10,
            top:20,
            bottom:20,
            data :['周一','周二','周三','周四','周五','周六','周天']
            },
            tooltip:{
              trigger:'item',
              formatter:'{a}<br/>{b}:{c}({d}%)'
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    data:[
                      {
                        value:3000,
                        name:'周一'
                      },
                      {
                        value:3000,
                        name:'周二'
                      },{
                        value:3000,
                        name:'周三'
                      },{
                        value:7000,
                        name:'周四'
                      },{
                        value:6000,
                        name:'周五'
                      },{
                        value:8000,
                        name:'周六'
                      },{
                        value:5000,
                        name:'周天'
                      },
                    ].sort((a,b)=>{
                      return a.value - b.value;
                    }),
                    roseType:'radius'
                }
            ] 

          }  
          return option;
      }
  render() {
    return (
      <div className='card-wrap'>
          <Card title="扇形图之一">
            <ReactEcharts option={this.getOption()} style={{height:500}}/>
          </Card>
          <Card title="扇形图之二">
          <ReactEcharts option={this.getOption2()} style={{height:500}}/>
          </Card>
          <Card title="扇形图之三">
          <ReactEcharts option={this.getOption3()} style={{height:500}}/>
          </Card>
      </div>
    )
  }
}
