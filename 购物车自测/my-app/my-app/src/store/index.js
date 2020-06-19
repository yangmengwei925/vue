import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
 const initState={
    list:[],
    price:0,
    count:0,
    childrenList:[],
    ind:0
 }
const reducer=(state=initState,action)=>{
    const newArr=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'GET_SHOOP':
            newArr.list=action.list.goods
            console.log(newArr.list)
        newArr.childrenList=newArr.list[newArr.ind].foods
        console.log( newArr.childrenList)
            return newArr
            case 'CATE_RING':
                newArr.childrenList=action.item.foods
                newArr.ind=action.index 
                return newArr
                case 'ADD_COUNT':
                newArr.list[newArr.ind].foods[action.index].count+=1
                newArr.childrenList =newArr.list[newArr.ind].foods
                //数量
                newArr.list[newArr.ind].counts=newArr.childrenList.reduce((prove,next)=>{
                    return prove+next.count
                },0)
                //总数
                newArr.count=newArr.list.reduce((prove,next)=>{
                    return prove+(next.count*next.price)
                },0)
                  //count总数量
                newArr.count=newArr.list.reduce((prove,next)=>{
                    return prove+next.counts
          },0) 
              //总价
         newArr.list[newArr.ind].prices=newArr.childrenList.reduce((prove,next)=>{
            return prove+(next.count*next.price)
          },0)
                //点击每一个的总价
                newArr.price=newArr.list.reduce((prove,next)=>{
                    return prove+next.prices
                },0)
                return newArr
        default:
            return state
    }
}
const store=createStore(reducer,applyMiddleware(thunk))
export default store