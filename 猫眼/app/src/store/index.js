
import { createStore } from 'redux'
import address from '../data/address.json'
import Ing from '../data/will.json'
console.log(Ing);

let reducer = (state = {
    hotList:[],
    address,
     city:"北京",
     searchList:[],
     Ing
        
}, action) => {
    // 1、深拷贝
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'SET_HOT_LIST':newstate.hotList=action.data
        return newstate
        // case 'SET_ADDRESS':newstate.address=action.data
        // return newstate
        case 'SET_CITY':newstate.city=action.city
        return newstate
        case "SET_SEARCHLIST":{
            console.log(action.keyword)
           
         if(action.keyword){
                    newstate.searchList=newstate.hotList.filter(item=>item.nm.includes(action.keyword))
         }else{
             newstate.searchList=[]
         }
           return newstate
        }
        case 'ADD_HOTLIST':{
            let obj={
            "id": 1217041,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/6d1a970c7fefb016006b0af099d8ff38867262.jpg",
            "version": "",
            "nm": "南方车站的聚会1111111",
            "preShow": false,
            "sc": 7.8,
            "globalReleased": true,
            "wish": 170997,
            "star": "胡歌,桂纶镁,廖凡",
            "rt": "2019-12-06",
            "showInfo": "今天324家影院放映2755场",
            "showst": 3,
            "wishst": 0
        }
        newstate.hotList.push(obj)}
         return newstate
        default: return newstate
    }
}
let store = createStore(reducer)
window.store=store
export default store