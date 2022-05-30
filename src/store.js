import { createStore , combineReducers , applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './redux/reducers/userReducer'


const rootReducer = combineReducers ({
    userList : userReducer,
})

 const initialState = {}

// const middleware = [thunk]

export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))

