//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import { store } from './redux/store/index';
import registerServicWorker from './reportWebVitals'

ReactDOM.render(
	<Provider store={store}>
		<Router/>
	</Provider>
	,
	document.getElementById('root')
)
registerServicWorker()