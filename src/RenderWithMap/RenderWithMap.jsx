//state , props

import React from 'react'
import BaiTapMovie from './BaiTapMovie'

const RenderWithMap = () => {

    const products = [
        {
            name: 'Iphone 7+',
            price: 100000,
            color: 'black'
        },
        {
            name: 'Iphone 8',
            price: 200000,
            color: 'pink'
        },
        {
            name: 'Iphone 9',
            price: 300000,
            color: 'blue'
        }

    ]

    return (
        <div className='container mt-5'>
            <h1>RenderWithMap</h1>
            <p>Danh sach san pham</p>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                    </tr>

                </thead>
                <tbody>
                    {/* 1. Bac buoc co return => UI
                        2. Chi cho phep return ve 1 the duy nhat
                        3. Phai co thuoc tinh key o the bao boc ngoai cung va gia tri cua key la duy nhat
                        4. Han che su dung index lam gia tri cua thuoc tinh key 
                            => chi su dung khi mang tinh (khong co the,xoa,sua)
                    */}
                    {
                        products.map((products,index) => {
                            return (
                                <tr key={index}>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
                                    <td>{products.color}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <h2 className='mt-5'>Bài tập Movie</h2>
            <BaiTapMovie/>
        </div>
    )
}

export default RenderWithMap