import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { baiTapFormActions } from "../Store/baiTapForm/slice";

const ProductTable = () => {
    const { productList } = useSelector((state) => state.baiTapForm);
    const dispatch = useDispatch()
    console.log("productList: ", productList);
    return (
        <div>
            <h1>ProductTable</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>type</th>
                        <th>//</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((prod,index) => {
                        return (
                            <tr key={index}>
                                <td>{prod?.id}</td>
                                <td>
                                    <img
                                        style={{
                                            width: 80,
                                            height: 80,
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        src={prod?.image}
                                        alt="..."
                                    />
                                </td>
                                <td>{prod?.name}</td>
                                <td>{prod?.price}</td>
                                <td>{prod?.description}</td>
                                <td>{prod?.productType}</td>
                                <td>
                                    <div className="d-flex gap-3">
                                        <button className="btn btn-success"
                                            onClick={()=>{
                                                dispatch(baiTapFormActions.editProduct(prod))
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td>123</td>
                        <td>////</td>
                        <td>Name</td>
                        <td>50$</td>
                        <td>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis, minus.
                        </td>
                        <td>Laptop</td>
                        <td className="d-flex gap-3">
                            <button className="btn btn-danger">Detele</button>
                            <button className="btn btn-primary">Edit</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
