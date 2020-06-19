import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let reducer = function(state,action){

    return {...state}
}

let initState = {
    headerlist:[
        {
            title:'菜单',
            to:'/home/main'
        },
        {
            title:'评价',
            to:'/home/talk'
        },
        {
            title:'商家',
            to:'/home/shop'
        }

    ]
}

let store = createStore(reducer,initState,applyMiddleware(thunk))

export default store