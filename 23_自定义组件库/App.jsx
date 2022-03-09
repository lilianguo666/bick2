import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import {WechatOutlined} from '@ant-design/icons'
export default class App extends Component {
	render() {
		return (
			<div>
				App...
				<Button type="primary">点我</Button><br />
				<Button>点我</Button>
				<Button type="link">点我</Button> &nbsp;
				<WechatOutlined />
				<DatePicker/>
			
			</div> 
		)
	}
}
