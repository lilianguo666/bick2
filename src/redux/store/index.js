import { createStore } from 'redux';
import reducer from '../reducer/index';
import {composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer,composeWithDevTools())
