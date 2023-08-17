import React from 'react'
import './style.css' //ăn toàn bộ component trong dự án
import style from './style.module.css'
import './style.scss'



const StyleComponent = () => {
    return (
        <div className='container mt-5'>
            <h1 className='title'>StyleComponent</h1>
            <h1 className={`${style.subTitle} ${style.description} ${style['sub-title']}`}>subTitle</h1>
            <p style={{fontSize:'20px',fontWeight: 600,color:'red'}}>Nguyễn Hà Kiên</p>
            <p className='style__title'>hello</p>
        
        </div>
    )
}

export default StyleComponent