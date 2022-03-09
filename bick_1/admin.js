import React, { Component } from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
// import Home from './pages/home'
import './style/common.less'
// import {WechatOutlined} from '@ant-design/icons'
export default class App extends Component {
	render() {
		return (
			<Row className="zhongti"> 
				<Col span={4} className="Nav-left">
					<NavLeft/>
				</Col>
				<Col span={20} className="main">
				<Header/>
				<Row className="content">
				{/* <Home/> */}
					{this.props.children}
				</Row>
				<Footer/>
				</Col>
			</Row>
		)
	}
}
