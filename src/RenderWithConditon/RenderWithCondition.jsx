import React from 'react'

const RenderWithCondition = () => {
    const isLogin = false
    const isShowMesseage = true
    const renderLogin = () => {
            return isLogin ? (
                <div>
                    <p>hello kien</p>
                    <button className='btn btn-danger'>Dang xuat</button>
                </div>
            ):(
                <div>
                    <button className='btn btn-success'>Dang nhap</button>
                </div>
                
            )
    }
    return (
        <div className='container'>
            <h1>RenderWithCondition</h1>
            {/* {isLogin ?
                (
                    <div>
                        <p>hello kien</p>
                        <button className='btn btn-danger'>Dang xuat</button>
                    </div>
                ) : (
                    <button className='btn btn-success'>Dang nhap</button>
                )
            } */}

            {renderLogin()}
            {
                isShowMesseage && <p className='fs-3 mt-5'>Hello BC 47</p>
            }
        </div>
    )
}

export default RenderWithCondition