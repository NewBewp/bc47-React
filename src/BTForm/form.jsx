import React, { useState } from 'react'

const ProductForm = () => {
    const [formValue, setFormValue] = useState()
    const [formError, setFormError] = useState()
    console.log('formError: ', formError)

    console.log('formValue: ', formValue)

    //currying function
    const handleFormValue = () => (ev) => {
        const { name, value, validity, minLength, maxLength, title } = ev.target
        console.log('validity: ', validity)
        const { valueMissing, tooShort, patternMismatch } = validity

        let mess = ''

        if (valueMissing) {
            mess = `Vui lòng nhập ${title}`
        } else if (tooShort) {
            mess = `Vui lòng nhập ${title} tối thiểu ${minLength} ký tự`
        } else if (patternMismatch) {
            mess = `Vui lòng nhập đúng ${title}`
        }

        setFormError({
            ...formError,
            [name]: mess,
        })

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    return (
        <div>
            {/* button ở trong form mặc định sẽ có type là submit */}

            <form
                noValidate
                onSubmit={(ev) => {
                    // Ngăn chặn sự kiện reload của browser khi submit form
                    ev.preventDefault()

                    const elements = document.querySelectorAll('input')
                    console.log('elements: ', elements);

                    let isFlag = false

                    for (let key in formError) {
                        if (formError[key]) {
                            isFlag = true
                            break
                        }
                    }

                    if (isFlag) return

                    console.log('submit')
                }}
            >
                <h2 className="p-4 bg-dark text-warning">Product Info</h2>

                <div className="mt-3 row">
                    <div className="col-6">
                        <p>ID</p>
                        <input
                            type="text"
                            className="form-control"
                            name="id"
                            title="id"
                            value={formValue?.id || ''}
                            required
                            minLength={5}
                            maxLength={20}
                            // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         id: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue()}
                        />
                        {formError?.id && <p className="text-danger">{formError?.id}</p>}
                    </div>
                    <div className="col-6">
                        <p>Image</p>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            title="image"
                            required
                            value={formValue?.image || ''}
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         image: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue()}
                        />
                        {formError?.image && <p className="text-danger">{formError?.image}</p>}
                    </div>
                    <div className="col-6">
                        <p>Name</p>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            title="name"
                            value={formValue?.name || ''}
                            onChange={handleFormValue()}
                            required
                            minLength={10}
                        />
                        {formError?.name && <p className="text-danger">{formError?.name}</p>}
                    </div>
                    <div className="col-6">
                        <p>ProductType</p>
                        <input
                            type="text"
                            className="form-control"
                            title="product type"
                            name="productType"
                            value={formValue?.productType || ''}
                            onChange={handleFormValue()}
                        />
                        {formError?.productType && (
                            <p className="text-danger">{formError?.productType}</p>
                        )}
                    </div>
                    <div className="col-6">
                        <p>Price</p>
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            title="giá"
                            value={formValue?.price || ''}
                            onChange={handleFormValue()}
                            required
                            pattern="^[0-9]+$"
                        />
                        {formError?.price && <p className="text-danger">{formError?.price}</p>}
                    </div>
                    <div className="col-6">
                        <p>Description</p>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            title="description"
                            value={formValue?.description || ''}
                            onChange={handleFormValue()}
                        />
                    </div>
                </div>

                <div className="mt-3 d-flex gap-3">
                    <button className="btn btn-success">Create</button>
                    <button className="btn btn-info">Update</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm
