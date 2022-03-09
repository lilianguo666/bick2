import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state = {mouse:false}
	handleMouse = (flag)=>{
		return() =>{
			this.setState({mouse:flag})
		}
	}

	handleCheck = (id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
		}
	}	
	handleDeletd = (id)=>{
		if(window.confirm('确认要删除吗？')){
			this.props.deleteTodo(id)
		}
	}
	render() {
	const {id,name,done} = this.props
		const {mouse} = this.state
		return (
		<div>
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
			<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button onClick={() => {this.handleDeletd(id) }} className="btn btn-danger" style={{display:mouse?'block': 'none'}}>删除</button>
			</li>
		</div>
		)
	}
}