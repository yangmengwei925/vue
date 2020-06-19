import React, { Component } from 'react';
import {connect} from 'react-redux'
// import Axios from 'axios'
class Address extends Component {
    render() {
        const {address}=this.props
        console.log(address)
        return (
            <div className="address">
                <h2 onClick={()=>{
                    this.props.history.go(-1)
                }}>定位城市1</h2>
                <h3>定位失败,请重新定位</h3>
                <p className="hot_city">热门城市</p>
                <div className="left">
                        {
                            address.hot&&address.hot.map((item,index)=>{
                                return <span key={index}>{item}</span>
                            })
                        }
                </div>
              
                    {
                        address.city&&address.city.map((item,index)=>{
                            return <div className="city_name" key={index}>
                            <h4 id={`${item.title}`}>{item.title}</h4>
                           {
                               item.lists.map((v,i)=>{
                                   return <h4 key={i} onClick={()=>{
                                       this.props.history.push('/address')
                                       this.props.setCity(v)
                                       this.props.history.push({
                                           pathname:'/layout/movie/hot',
                                           query:{
                                               city:v
                                           }
                                       })
                                   }}>{v}</h4>
                               })
                           }
                            </div>
                        })
                    }
                        <div className="tabBar">
                        <span>热门城市</span>
                        {
                      address.city&&address.city.map((item,index)=><a href={`#${item.title}`} key={index}><h2>{item.title}</h2></a>)
                                
                        }
                        </div>
                </div>
        );
    }
    // componentDidMount(){
    //     Axios.get('/addr').then(({data})=>{
    //         this.props.setAddress()
    //     })
    // }
} 
 // address.city.map((item,index)=><a href={`${item.title}`}></a><h2 key={index}>{item.title}</h2>
//从仓库取数据
const mapStateToProps=(state)=>{
    return {
        address:state.address
    }
}
const mapdispatchToProps=(dispatch)=>{
        return {
            // setAddress(data){
            //     dispatch({
            //         type:"SET_ADDRESS",
            //         data
            //     })
            // }
            setCity(city){
                dispatch({
                    type:'SET_CITY',
                    city
                })
            }
        }
}
export default connect(mapStateToProps,mapdispatchToProps) (Address);
