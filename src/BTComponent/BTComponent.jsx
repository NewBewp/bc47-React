import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const BTComponent = () => {
  return (
    <div className='container'>
        <h1>BTComponent</h1>
        <Header/>
        <div className='row'>
            <div className="col-4 pe-0">
                <Navigation/>
            </div>
            <div className="col-8 ps-0">
                <Content/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BTComponent