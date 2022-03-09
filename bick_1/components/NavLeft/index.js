import React, { Component } from 'react'
import { Menu} from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less'
import MenuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from './../../redux/action'
import SubMenu from 'antd/lib/menu/SubMenu';
class NavLeft extends Component {
    state={
        currentKey:''
    }
    handleClick = ({item,key}) =>{
        const {dispatch} =this.props;
        console.log(item);
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey:key   
        })
    }

    componentWillMount(){
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
       const menuTreeNode = this.renderMenu(MenuConfig)
       this.setState({
           currentKey,
           menuTreeNode
       })
    }

  

    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>  
                    </Menu.Item>
        })
    }

    render() {
            // const { SubMenu } = Menu;
            function handleClick(e) {
            // console.log('click', e);
            }
        return (
            <div>
                <div className='logo'>
                    
                        <img src='/assets/logo-ant.svg' alt=''/>
                        <h1>Imooc MS</h1>
                   
                <Menu 
                onClick={this.handleClick} 
                style={{ width: 256 }} 
                mode="vertical" 
                selectedKeys={this.state.currentKey}
                // selectedKeys={this.state.currentKey}
                theme='dark'
                >
                      {this.state.menuTreeNode}
                </Menu>
                </div>
            </div>
        )
    }
}
export default connect()(NavLeft)