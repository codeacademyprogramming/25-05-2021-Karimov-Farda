import React, { useState } from 'react'

import { useDispatch } from "react-redux";
import { addAction,addAsyncAction } from '../../redux/actions';
// import { useGlobalContext } from "../../contexts/globContext";

export default function AddProduct() {
    // const { dispatch } = useGlobalContext();
    const  dispatch  = useDispatch();

    const [productTitle, setProductTitle] = useState(``);

    const handleProductCreate = evt => {
        evt.preventDefault();
        console.log(productTitle);
        if (productTitle) {
            dispatch(addAsyncAction(productTitle))
            setProductTitle('')
        }
    }


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        value={productTitle}
                        onChange={evt => setProductTitle(evt.target.value)} type="text" className="form-control" id="title" placeholder="e.g.: Iphone 12" />
                </div>
                <div className="mb-3">
                    <button onClick={handleProductCreate}  className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}
