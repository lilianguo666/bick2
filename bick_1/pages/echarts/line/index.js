import React, { Component } from 'react'
import { Card } from 'antd'

// import echartTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
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
        },
        tooltip:{
          trigger:'axis',
        },
        yAxis:{
          type:'value'
        },
         xAxis: {
          data :['周一','周二','周三','周四','周五','周六','周天']
          },
        series:[
            {
                name:'订单量',
                type:'line',
                data:[
                  1000,
                  2000,
                  5000,
                  1500,
                  3000,
                  1200,
                  800
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
            },
            tooltip:{
              trigger:'axis',
            },
            yAxis:{
              type:'value'
            },
             xAxis: {
              data :['周一','周二','周三','周四','周五','周六','周天']
              },
              legend:{
                data:['OFO订单量','摩拜订单量']
              },
            series:[
                {
                    name:'OFO订单量',
                    type:'line',
                    data:[
                      1200,
                      3000,
                      5000,
                      6000,
                      8000,
                      12000,
                      20000
                     ]
                },
                {
                  name:'摩拜订单量',
                  type:'line',
                  data:[
                    1000,
                    2000,
                    5500,
                    6000,
                    8000,
                    10000,
                    12000
                   ]
              },
            ]          
    
          }  
          return option;
        } 
        getOption3 = () =>{
          let option = {
            title:{
              text: '用户骑行订单',
            },
            tooltip:{
              trigger:'axis',
            },
            yAxis:{
              type:'value'
            },
             xAxis: {
               type:'category',
               boundaryGap:false,
              data :['周一','周二','周三','周四','周五','周六','周天']
              },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[
                      1000,
                      2000,
                      5000,
                      1500,
                      3000,
                      1200,
                      800
                     ],
                     areaStyle:{}
                }
            ]          
    
          }  
          return option;
      }  
  render() {
    return (
      <div className='card-wrap'>
          <Card title="折线图之一">
            <ReactEcharts option={this.getOption()} style={{height:500}}/>
          </Card>
          <Card title="折线图之二">
          <ReactEcharts option={this.getOption2()} style={{height:500}}/>
          </Card>
          <Card title="折线图之三">
          <ReactEcharts option={this.getOption3()} style={{height:500}}/>
          </Card>
      </div>
    )
  }
}
