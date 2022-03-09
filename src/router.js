import React, { Component } from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormReg from './pages/form/register';
import basicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from './pages/city';
import Order from './pages/order';
import Common from './common'
import User from './pages/user'
import BikeMap from './pages/bikeMap'
import OrderDetail from './pages/order/detail'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Rich from './pages/rich'
import Permission from './pages/permission'
import Home from './pages/home'

// import Nomatch from './pages/nomatch'
export default class Irouter extends Component {
  render() {
    return (
        <HashRouter>
            <App>
            <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/common" render={() =>
                 <Common>
                   <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                 </Common>
               }
               />
                <Route path="/" render={()=>
                <Admin>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/loadings" component={Loadings}/>
                  <Route path="/ui/notification" component={Notice}/>
                  <Route path='/ui/messages' component={Message} />
                  <Route path='/ui/tabs' component={Tabs} />
                  <Route path='/ui/gallery' component={Gallery} />
                  <Route path='/ui/carousel' component={Carousel} />
                  <Route path='/form/login' component={FormLogin} />
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route path='/form/reg' component={FormReg} />
                  <Route path='/table/basic' component={basicTable} />
                  <Route path='/table/high' component={HighTable} />
                  <Route path='/city' component={City} />
                  <Route path='/order' component={Order} />
                  <Route path='/user' component={User} />
                  <Route path='/bikeMap' component={BikeMap} />
                  <Route path='/charts/bar' component={Bar} />
                  <Route path='/charts/pie' component={Pie} />
                  <Route path='/charts/line' component={Line} />
                  <Route path='/rich' component={Rich} />
                  <Route path='/permission' component={Permission} />
                  <Route path='/home' component={Home} />
                  <Redirect to="/home"/>
                </Admin>
                }/>
              </Switch>
            </App>
        </HashRouter>
    )
  }
}
