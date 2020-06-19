import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let initState = {
    list: [],
    sumCount: 0,
    sumPrice: 0
}

let reducer = (state = initState, action) =>{
    let newArr = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case 'GET_LIST':
            newArr.list = action.list
            return newArr
        case 'ADD_COUNT':
            newArr.list[action.count].foods[action.index].count += 1
            newArr.list[action.count].sumCount = newArr.list[action.count].foods.reduce((prev, next) => {
                return prev + next.count
            }, 0)
            newArr.sumCount = newArr.list.reduce((prev, next) => {
                return prev + next.sumCount
            }, 0)

            newArr.list[action.count].sumPrice = newArr.list[action.count].foods.reduce((prev, next) => {
                return prev + next.count * next.price
            }, 0)

            newArr.sumPrice = newArr.list.reduce((prev, next) => {
                return prev + next.sumPrice
            }, 0)
            
            return newArr
        case 'DEL_COUNT':
                newArr.list[action.count].foods[action.index].count -= 1
                newArr.list[action.count].sumCount = newArr.list[action.count].foods.reduce((prev, next) => {
                    return prev + next.count
                }, 0)
                newArr.sumCount = newArr.list.reduce((prev, next) => {
                    return prev + next.sumCount
                }, 0)
            return newArr
        default :
        return state
    }
}

let store = createStore(reducer, applyMiddleware(thunk))

export default store