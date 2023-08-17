import React from 'react'
import { useSelector } from 'react-redux'


const ProductDetail = () => {
    const {productDetail} = useSelector((state)=>state.baiTapPhone)
    console.log("productDetail: ", productDetail);

  return (
    <div className='row'>
        
        <div className='col-4'>
            <img src={productDetail.hinhAnh} alt="..." className='img-fluid' />
        </div>
        <div className='col-8'>
            <h2 className='mb-3'>Thông số kĩ thuật</h2>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>{productDetail.manHinh}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{productDetail.heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td>Camera trước</td>
                        <td>20 MP</td>
                    </tr>
                    <tr>
                        <td>Camera sau</td>
                        <td>Chính 48 MP, Phụ 8MP, 5MP</td>
                    </tr>
                    <tr>
                        <td>Ram</td>
                        <td>4 GB</td>
                    </tr>
                    <tr>
                        <td>Rom</td>
                        <td>64 GB</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductDetail