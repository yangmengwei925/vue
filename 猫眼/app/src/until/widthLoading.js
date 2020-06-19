import Loadable from 'react-loadable';
import React from 'react'
const Loading=()=>{
    return <span>Loading</span>
}
export default (loader,loading=Loading)=>{
  return Loadable({
      loader,
      loading,
  })
}