
import React, { Component } from 'react';

class Item extends Component {
    render() {
        let {img,nm,sc,globalReleased}=this.props
        return (
            <div className='item'>
{/** 把 静态的ip换成 线上的ip地址 */}
                <div className='left'><img src={img.replace('w.h','64.100')} alt="" />
                            {
                                console.log(img)
                            }
                </div>
                <div className='mid'>
                    <p className="name">{nm}</p>
                    <br></br>
                   <p className="people"> 观众者:{sc}</p>
                </div>
                <div className='right'>
                    <button className={globalReleased?'red':'green'}>{globalReleased?"购票":"预售" }</button>
                </div>
            </div>
        );
    }
}

export default Item;