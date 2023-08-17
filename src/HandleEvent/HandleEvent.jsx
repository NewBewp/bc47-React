import React from 'react'

const HandleEvent = () => {
    const loger = () => {
        alert('Hello world')
    }

    const showMessage = (messeage) => {
        alert(messeage)
    }
    return (
        <div>
            <div className="container mt-5">
                <h1>HandleEvent</h1>

                {/* Hàm không có tham số */}
                <button className='btn btn-outline-success mt-3' onClick={loger}>
                    Loger
                </button>

                {/* Hàm có tham số */}
                <button className='btn btn-outline-success mt-3' onClick={() => {
                    showMessage('Hello CyberSoft')
                }}>
                    showMessage
                </button>

                <button className='btn btn-outline-danger mt-3' onClick={(event) => {
                    console.log(event.currentTarget);
                    showMessage('Hello CyberSoft1')
                }}>
                   <span>showMessage1</span>
                </button>
            </div>
        </div>
    )
}

export default HandleEvent

// useRef