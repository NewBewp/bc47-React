import React from 'react'
import HeaderDemo from './HeaderDemo'

const DemoProps = () => {
    return (
        <div className='container mt-5'>
            <h1>DemoProps</h1>

            <HeaderDemo bg='red' fontSize='20px' name='kiên' />
            <HeaderDemo bg='yellow' />
            <HeaderDemo  bg='green'/>
        </div>
    )
}

export default DemoProps