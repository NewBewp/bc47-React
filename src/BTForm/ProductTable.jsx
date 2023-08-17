import React from "react";

const ProductTable = () => {
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
