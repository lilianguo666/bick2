import React, { Component } from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header'
import './style/common.less'
// import {WechatOutlined} from '@ant-design/icons'
export default class Common extends Component {
	render() {
		return (
            <div>
                <Row className='zhongti'> 
				    <Header menuType="second" />
			    </Row>
                <Row> 
				    {this.props.children}
			    </Row>
            </div>
		)
	}
}
