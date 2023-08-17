import React from 'react'
import {NavLink} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='d-flex   gap-3'>
        <NavLink to='/BindingData'>Binding Data</NavLink>
        <NavLink to='/BTComponent'>BTComponent</NavLink>
        <NavLink to='/RenderWithCondition'>RenderWithCondition</NavLink>
    </div>
  )
}

export default HomePage