//rafce

import React, { useState } from 'react'
import BaiTapCar from './BaiTapCar'

const DemoState = () => {
    // let isLogin = true;

    //1. Mọi thứ cần thay đổi trên UI => đưa vào state 
    //2. Để tạo 1 state trong function component => gọi hàm (hook) useState
    //3. useState trả về 1 mảng gồm 2 phần tử: 
    // + phẩn tử thứ 0: state
    // + phẩn tử thứ 1: 1 hàm setState => thay đổi giá trị của state
    //4. Kkhi state đc thay đổi = hàm setState => component sẽ đc render lại với giá trị state mới => UI dc update
    //5. Tham số truyền vào khi gọi hooks useState 
    //=> gọi là giá trị mặc định của state khi component đc render lần đầu tiên
    //6. Chỉ nên thay đổi giá trị của state thông qua hàm setState 
    //7. Trong 1 component ko giới hạn số lượng state đc tạo = hooks useState
    //8. Tham số của useState có thể là 1 func => giá trị trả về của func này là giá trị ặc định của state 
    //=> func này chỉ đc gọi duy nhất 1 lần khi component render lần đầu tiên
    let [isLogin, setIsLogin] = useState({ name: 'abc' })

    const [state] = useState(() => {
        return 'abc'
    })
    console.log('state: ', state);

    const handleLogin = (login) => {
        // isLogin = login
        setIsLogin(login)
        console.log('isLogin: ', isLogin)
    }



    const [number, setNumber] = useState(100)
    const [fontSize, setFontSize] = useState(20)

    console.log('Render');
    return (
        <div className='container mt-5'>
            <h1>DemoState</h1>
            {isLogin ? (<div>
                Hello kien
                <button
                    className='btn btn-danger ms-4'
                    onClick={() => { handleLogin(false) }}
                >
                    Đăng xuất
                </button>
            </div>
            ) : (
                <button
                    className='btn btn-success'
                    onClick={() => { handleLogin(true) }}
                >
                    Đăng nhập

                </button>
            )}

            <h2>Example</h2>
            <p className='fs- mt-4'>Number: {number}</p>
            <div>
                <button
                    className='btn btn-outline-success'
                    onClick={() => {
                        setNumber(number + 2)
                    }}> + Number</button>

                <button
                    className='btn btn-outline-danger ms-5'
                    onClick={() => {
                        setNumber(number - 2)

                    }}> - Number</button>
            </div>



            <p className="mt-5" style={{ fontSize }}>
                Hello Word
            </p>
            <div className="mt-5">
                <button 
                    className="btn btn-success"
                    onClick={()=>{
                        setFontSize(fontSize + 2)
                    }}
                >+ font size</button>
                <button 
                    className="btn btn-danger"
                    onClick={()=>{
                        setFontSize(fontSize - 2)
                    }}
                    >- font size</button>
            </div>


                    {/* {Bài tập car} */}
                    <BaiTapCar/>
        </div>


    )
}

export default DemoState