import React, { Component } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'


import { connect } from 'react-redux'
import Axios from 'axios'

class Home extends Component {
    state = {
        count: 0
    }
    render() {
        let { list, add, del, sumCount, sumPrice } = this.props
        let { count } = this.state
        return (
            <div className='home'>
                <header>
                    <Header/>
                    <h2>
                        所有的数量：{ sumCount }
                    </h2>
                    <h2>
                        所有的价格：{ sumPrice }
                    </h2>
                    <Search/>
                    
                </header>

                <section>
                    <ul className="left">
                        {
                            list.map((item, index) => {
                                return <li className={ count === index? 'active': ''} onClick={() => {
                                    this.setState({
                                        count: index
                                    })
                                }} key={ index }>
                                    { item.name }
                                </li>
                            })
                        }
                    </ul>
                    <ul className="right">
                        <p>
                            总数量： {
                                list.length > 0?list[count].foods.reduce((prev, next) => {
                                    return prev + next.count
                                }, 0):null
                            }
                        </p>
                        <p>
                            总价格： {
                                list.length > 0?list[count].foods.reduce((prev, next) => {
                                    return prev + next.count * next.price
                                }, 0):null
                            }
                        </p>

                        {
                            list.length > 0?list[count].foods.map((item, index) => {
                                return <li key={ index }>
                                    { item.name }
                                    <div>
                                        <button onClick={() => {
                                            del(count, index)
                                        }}>-</button>
                                        {
                                            item.count
                                        }
                                        <button onClick={() => {
                                            add(count, index)
                                        }}>+</button>
                                    </div>
                                </li>
                            }): null
                        }
                    </ul>
                </section>

                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
    componentDidMount() {
        let { getList } = this.props
        getList()
    }
}

let mapState = (state) => {
    let { list, sumCount, sumPrice } = state
    return {
        list,
        sumCount,
        sumPrice
    }
}

let mapDispatch = (dispatch) => {
    return {
        getList() {
            dispatch((next) => {
                Axios.get('/getList').then(res => {
                    res.data.goods.forEach(item => {
                        item.sumCount = 0
                        item.sumPrice = 0
                        item.foods.forEach(items => items.count = 0)
                    })
                    next({ type: 'GET_LIST', list: res.data.goods })
                })
            })  
        },
        add(count, index) {
            dispatch({ type: 'ADD_COUNT', count, index})
        },
        del(count, index) {
            dispatch({ type: 'DEL_COUNT', count, index})
        }
    }
}

export default connect(mapState, mapDispatch)(Home)


