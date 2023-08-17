import React, { useState } from 'react'




const BaiTapCar = () => {
    const [imgSrc, setImgSrc] = useState('./imgages/car/red-car.jpg')

    const handleImgSrc = (name) => {
        setImgSrc(`./imgages/car/${name}-car.jpg`)
    }

    // currying func
    const handleImg = (name) => () => {
        setImgSrc(`./images/car/${name}-car.jpg`)
    }

    return (
        <div className='container mt-5'>
            <h2>BaiTapCar</h2>
            <div className='row'>
                <div className="col-8">
                    <img className='img-fluid' src={imgSrc} alt="..." />
                </div>
                <div className="col-4 d-flex flex-column" style={{ gap: 20 }}>
                    <button
                        className='btn btn-dark'
                        onClick={() => handleImgSrc('black')}
                    >Black</button>
                    <button
                        className='btn btn-danger'
                        // onClick={()=>{
                        //     setImgSrc('./imgages/car/red-car.jpg')
                        // }}
                        onClick={() => handleImg('red')}

                    >Red</button>
                    <button
                        className='btn btn-secondary'
                        // onClick={()=>{
                        //     setImgSrc('./imgages/car/silver-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('silver')}
                    >Silver</button>
                    <button
                        className='btn text-white'

                        style={{ background: 'grey' }}
                        // onClick={()=>{
                        //     setImgSrc('./imgages/car/steel-car.jpg')
                        // }} 
                        onClick={() => handleImgSrc('steel')}
                    >Steel</button>
                </div>
            </div>
        </div>
    )
}

export default BaiTapCar