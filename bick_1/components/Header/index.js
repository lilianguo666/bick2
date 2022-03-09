import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Util from '../../utils/utils'
import axios from '../../axios'
import './index.less'
import { connect } from 'react-redux'

class Header extends Component {
    state ={}
    componentWillMount(){
        this.setState({
            useName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData() {
        let city = "石家庄"
        axios.jsonp({
          url: `https://www.tianqiapi.com/api?version=v1&appid=21375891&appsecret=fTYv7v5E&city=${encodeURIComponent(city)}`
        }).then(res => {
          if (res) {
            let city = res.city;
            let wea = res.data[0].wea;
            this.setState({
              city,
              wea
            })
          }
        })
      }
    render() {
        const menuType = this.props.menuType
        return (
            <div className='header'>
                <Row className='header-top'>
                    {
                        menuType? 
                        <Col span={6} className='logo'>
                            <img src="/asset/logo-ant.svg" alt=""/>
                            <span>IMooc 通风管理系统</span>
                        </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.useName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':  <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        {this.props.menuName}
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>
                            {this.state.city}&nbsp;
                            {this.state.wea}
                        </span>
                    </Col>
                </Row>
                }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        menuName:state.menuName
    }
}
export default connect(mapStateToProps)(Header);