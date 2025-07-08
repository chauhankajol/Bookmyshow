import React, { useContext } from 'react'
import { slots } from '../pages/data'
import Radiocomponent from './Radiocomponent'
import '../css/Timeshedule.css'
import BsState from '../context/Bsstate'
import BsContext from '../context/BsContext'
const Timeshedule = () => {
  const context=useContext(BsContext)
  const {time, changeTime } = context
  const handleChangetime=(val)=>{
    changeTime(val)
    window.localStorage.setItem("slot",val)
  }
  
  return (
    <>
    <div className='slot_container'> 
    <h1 className='ts_heading'>Select ashedule</h1>
    <div className='ts_main_container'>
   { slots.map((el,index)=>{
  return(
    <Radiocomponent text={el} key={index} data={time}changeSelection={handleChangetime}/>
  )
   })}

    </div>
    </div>
    </>
  )
}

export default Timeshedule