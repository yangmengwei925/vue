import {createStore} from 'redux'
import thunk from 'redux-thunk'
const initState={
    list:[]
}
const reducer=(state=initState,action)=>{
    const newArr=JSON.parse(JSON.stringify(state))
    switch(action.type){
      default:
        return state   
    }
   
}
export default store