import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
let initState = {
    list: [],
    fillist: [],
    tablist: [],
    Indexlist: []
}
let reducer = (state = initState, action) => {
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GET_LIST':
            newstate.list = action.list
            newstate.Indexlist = newstate.list
            return newstate
        case 'GET_FILLIST':
            newstate.fillist = action.fillist
            return newstate
        case 'TAB':
            newstate.tablist = newstate.fillist[action.id].list
            return newstate
        case 'FILTER':
                // newstate.Indexlist = newstate.list

            
            
            console.log(action.item)
           if(typeof(action.item)=='string'){
            // newstate.Indexlist = newstate.list
            if(action.item!='顺义区'&&action.item!='昌平区'){
                newstate.Indexlist.Shops=newstate.list.Shops.filter((item,index)=>item.City==action.item)
            }else{
                newstate.Indexlist.Shops=[{CarparName:'暂无数据'}]
            }
            
           }else if(typeof(action.item)=='object'){
                // newstate.Indexlist = newstate.list
                            if (action.item.typeTitle === '距我最近') {
                                newstate.Indexlist.Shops.sort((a, b) => {
                            return a.CommentRate - b.CommentRate
                        })
                    }
                    else if (action.item.typeTitle === '距我最远') {
                        newstate.Indexlist.Shops.sort((a, b) => {
                            return b.CommentRate - a.CommentRate
                        })
                    } else if (action.item.typeTitle === '升序') {
                        newstate.Indexlist.Shops.sort((a, b) => {
                            return a.ShopId - b.ShopId
                        })
                    } else if (action.item.typeTitle === '降序') {
                        newstate.Indexlist.Shops.sort((a, b) => {
                            return b.ShopId - a.ShopId
                        })
                    }
           }
        //    console.log(newstate.Indexlist);
           return newstate
            default:return state
        }

}

let store = createStore(reducer, applyMiddleware(thunk))

export default store

