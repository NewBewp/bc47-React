import React, { useState } from "react";

const ProductForm = () => {
    const [formValue, setFromValue] = useState();
    console.log("formValue: ", formValue);

    const handleFormValue = (name,value) =>(ev)=> {
        const{name,value} = ev.target
        setFromValue({
            ...formValue,
            [name]: value,
        });
    };
    return (
        <div>
            <form
                noValidate
                onSubmit={(ev) => {
                    ev.preventDefault();
                    console.log("submit");
                }}
            >
                <h2 className="p-4 bg-dark text-warning">Product Info</h2>
                <div className="row mt-3 ">
                    <div className="col-6">
                        <p>ID</p>
                        <input
                            type="text"
                            name="id"
                            className="form-control"
                            value={formValue?.id || ""}
                            // onChange={(ev) => {
                            //     setFromValue({
                            //         ...formValue,
                            //         id: ev.target.value,
                            //     });
                            // }}
                            onChange={handleFormValue('id')}
                        />
                    </div>
                    <div className="col-6">
                        <p>Image</p>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            value={formValue?.image || ""}
                            onChange={handleFormValue()}
                        />
                    </div>
                    <div className="col-6">
                        <p>Name</p>
                        <input type="text" className="form-control"
                        name="name"
                        value={formValue?.image || ""}
                        onChange={handleFormValue()} />
                    </div>
                    <div className="col-6">
                        <p>ProductType</p>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        <p>Price</p>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        <p>Description</p>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="gap-3 mt-3 d-flex">
                    <button className="btn btn-primary">Create</button>
                    <button className="btn btn-success">Update</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
