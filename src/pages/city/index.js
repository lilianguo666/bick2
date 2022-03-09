import React, { Component } from 'react'
import { Card, Form, Select, Button, Modal, Table, message } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import { OrderedMap } from 'immutable';

// const { Option } = Select;

// export default class index extends Component {

//   state={
//     isShowOpenCity:false,
//     dataSource:[]
//   }

//   params = {
//     page:1
//   }

//   handleOpenCity = () => {
//     this.setState({
//       isShowOpenCity:true
//     })
//   }

//   handleSubmit = () => {
//     let cityInfo = this.myForm.myForm.getFieldsValue();
//     axios.ajax({
//       url:"/city/open",
//       data:{
//         params:cityInfo
//       }
//     }).then(res=>{
//       if(res.code==='0'){
//         message.success("开通成功");
//         this.setState({
//           isShowOpenCity:false
//         })
//       }
//     })
//   }

//   requestList = () => {
//     axios.ajax({
//       url:'/open_city',
//       data:{
//         params:{
//           page:this.params.page
//         }
//       }
//     }).then(res=>{
//       if(res.code==='0'){
//         this.setState({
//           dataSource: res.result.item_list.map((item, index) => {
//             item.key = index;
//             return item;
//           }),
//           pagination:Utils.pagination(res,current=>{
//             this.params.page = current;
//             this.requestList();
//           })
//         })
//       }
//     })
//   }

//   componentDidMount() {
//     this.requestList()
//   }
//   render() {
//     const { dataSource, pagination } = this.state;
//     const columns = [{
//       title:"城市ID",
//       dataIndex:"id"
//     },{
//       title:"城市名称",
//       dataIndex:"name"
//     },{
//       title:"用车模式",
//       dataIndex:"mode",
//       render(mode){
//         return mode === 1 ? '指定停车点模式' : '禁停区模式'
//       }
//     },{
//       title:"营运模式",
//       dataIndex:"op_mode",
//       render(op_mode) {
//         return op_mode === 1 ? '自营' : '加盟'
//       }
//     },{
//       title:"授权加盟商",
//       dataIndex:"franchisee_name"
//     },{
//       title:"城市管理员",
//       dataIndex:"city_admins",
//       render(arr) {
//         return arr.map(item => {
//           return item.user_name
//         }).join(',');
//       }
//     },{
//       title:"城市开通时间",
//       dataIndex:"open_time"
//     },{
//       title:"操作时间",
//       dataIndex:"update_time"
//     },{
//       title:"操作人",
//       dataIndex:"sys_user_name"
//     }]
//     return (
//       <div>
//         <Card className='card-wrap'>
//           <FilterForm />  
//         </Card>  
//         <Card style={{ marginTop: 10 }} className='card-wrap'>
//           <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
//         </Card>
//         <Table
//           bordered
//           columns={columns}
//           dataSource={dataSource}
//           pagination={pagination}
//         />
//         <Modal
//           title="开通城市"
//           visible={this.state.isShowOpenCity}
//           onCancel= {() => {
//             this.setState({
//               isShowOpenCity:false
//             })
//           }}
//           onOk={this.handleSubmit}
//         >
//           <OpenCityForm ref={ c => this.myForm = c }/>
//         </Modal>
//       </div>
//     )
//   }
// }

// class FilterForm extends Component {
//   render() {
//     return (
//       <div>
//         <Form layout="inline">
//           <Form.Item label="城市" name="city">
//             <Select
//               style={{width:80}}
//               placeholder="全部"
//             >
//               <Option value="">全部</Option>
//               <Option value="1">北京市</Option>
//               <Option value="2">天津市</Option>
//               <Option value="3">上海市</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="用车模式" name="mode">
//             <Select
//               style={{width:130}}
//               placeholder="全部"
//             >
//               <Option value="">全部</Option>
//               <Option value="1">指定停车点模式</Option>
//               <Option value="2">禁停区模式</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="营运模式" name="op_mode">
//             <Select
//               style={{width:80}}
//               placeholder="全部"
//             >
//               <Option value="">全部</Option>
//               <Option value="1">自营</Option>
//               <Option value="2">加盟</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="加盟商授权状态" name="auth_status">
//             <Select
//               style={{width:80}}
//               placeholder="全部"
//             >
//               <Option value="">全部</Option>
//               <Option value="1">已授权</Option>
//               <Option value="2">未授权</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
//             <Button>重置</Button>
//           </Form.Item>
//         </Form>
//       </div>
//     )
//   }
// }

// class OpenCityForm extends Component {

//   render(){
//     const formItemLayout = {
//       labelCol: {
//         span: 5
//       },
//       wrapperCol: {
//         span: 10
//       }
//     }
//     return (
//       <div>
//         <Form {...formItemLayout}  ref={ c => this.myForm = c }>
//           <Form.Item label="选择城市" name="city_id" initialValue="1">
//             <Select>
//               <Option value="">全部</Option>
//               <Option value="1">北京市</Option>
//               <Option value="2">天津市</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="营运模式" name="op_mode" initialValue="1">
//             <Select>
//               <Option value="">全部</Option>
//               <Option value="1">自营</Option>
//               <Option value="2">加盟</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item label="用车模式" name="use_mode" initialValue="1">
//             <Select>
//               <Option value="">全部</Option>
//               <Option value="1">指定停车点</Option>
//               <Option value="2">禁停区</Option>
//             </Select>
//           </Form.Item>
//         </Form>
//       </div>
//     )
//   }
// }
const { Option } = Select;
export default class index extends Component {
  state = {
    list:[],
    isShowOpenCity:false,
  }
   
  params = {
    page:1
  }

  handleOpenCity = () =>{
       this.setState({
         isShowOpenCity:true
       })
  }

  handleSubmit= () =>{
     let cityInfo = this.myForm.myForm.getFieldsValue()
     axios.ajax({
       url:'city/open',
       data:{
         params:cityInfo
       }
     }).then((ref)=>{
       if(ref.code === '0'){
         message.success('开通成功');
         this.setState({
           isShowOpenCity:false
         })
         this.requestList();
       }
     })
  }
  componentDidMount() {
    this.requestList()
  }
    requestList = () => {
      let _this =this
    axios.ajax({
      url:'/open_city',
      data:{
        params:{
          page:this.params.page
        }
      }
    }).then((res)=>{
      this.setState({
        list: res.result.item_list.map((item,index)=>{
          item.key = index
          return item;
        }),
        pagination:Utils.pagination(res,(current)=>{
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }

  componentDidMount() {
    this.requestList()
  }
  render() {
    const columns=[
      {
        title:'城市ID',
        dataIndex: 'id'
      },
      {
        title:'城市名称',
        dataIndex: 'name'
      }, {
        title:'用车模式',
        dataIndex: 'mode',
        render(mode){
          return mode == 1? '停车点':'禁停区'
        }
      }, {
        title:'营运模式',
        dataIndex: 'op_mode',
        render(op_mode){
          return op_mode == 1? '自营':'加盟'
        }
      }, {
        title:'授权加盟商',
        dataIndex: 'franchisee_mode'
      }, {
        title:'都是管理员',
        dataIndex: 'city_admins',
        render(arr) {
          return arr.map(item => {
            return item.user_name
          }).join(',');
        }
      }, {
        title:'城市开通时间',
        dataIndex: 'open_time'
      },{
        title:'操作时间',
        dataIndex: 'update_time',
       render: Utils.formateDate
      },
      {
        title:'操作人',
        dataIndex: 'sys_user_name'
      },
    ]
    return (
      
      <div>
        <Card  className='card-wrap'>
        <FilterForm />
        </Card>
        <Card>
          <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <Table 
          columns={columns}
          
          dataSource={this.state.list}
          pagination = {this.state.pagination}
        />
        <Modal  
          title ="开通城市"
          visible= {this.state.isShowOpenCity}
          onCancel = {()=>{
            this.setState({
              isShowOpenCity:false
            })
          }}
          onOk={this.handleSubmit}
        >
          <OpenCityForm ref={ c => this.myForm = c }/>
        </Modal>
      </div>
    )
  }
}

 class FilterForm extends Component {
  render() {
    return (
      <div>
        <Form layout='inline'>
            <Form.Item label="城市">
                  <Select
                  placeholder ="全部"
                  style={{width:80}}
                >
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                  <Option value="3">深圳市</Option>
                </Select>
            </Form.Item>
            <Form.Item label="用车模式">
                  <Select
                  placeholder ="全部"
                  style={{width:130}}
                >
                  <Option value="">全部</Option>
                  <Option value="1">指定停车点模式</Option>
                  <Option value="2">禁停区模式</Option>
                </Select>
            </Form.Item>
            <Form.Item label="营业模式">
                  <Select
                  placeholder ="全部"
                  style={{width:80}}
                >
                  <Option value="">全部</Option>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
            </Form.Item>
            <Form.Item label="加盟商授权状态">
           <Select
              style={{width:80}}
              placeholder="全部"
            >
              <Option value="">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
            </Select>
          </Form.Item>
            <Form.Item>
              <Button type='primary' style={{margin:"0 20px"}}>查询</Button>
              <Button>重置</Button>
            </Form.Item>
        </Form>
      </div>
    )
  }
}

class OpenCityForm extends Component {
  render() {
    const formItrmLayout = {
      
      labelCol:{
        span:5
      },

      wrapperCol:{
        span:10
      }
    }
    return (
      <Form layout='horizontal' {...formItrmLayout} ref={ c => this.myForm = c }>
          <Form.Item label="选择城市" name="city_id" initialValue="1">
            <Select>
              <Option value="0">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
            </Select>
          </Form.Item>
          <Form.Item label="营运模式" name="op_mode" initialValue="1">
            <Select>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          </Form.Item>
          <Form.Item label="用车模式"  name="use_mode" initialValue="1">
            <Select>
              <Option value="1">指定停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          </Form.Item>
      </Form>
      )
  }
}
