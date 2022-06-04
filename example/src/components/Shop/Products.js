import React, {useEffect,useCallback}  from 'react'

import { useSelector, useDispatch } from "react-redux";

import AddProduct from "./AddProduct";
import { addItemAction} from "../Shop/basketAction"
import  { loadAsyncAction as loadProductAsyncAction} from '../../redux/actions'
const productSelector = state => {
    return state.products
}

export default function Products() {
    const products = useSelector(state => productSelector(state))
   const dispatch = useDispatch();
  
  
//    const fetchProducts = useCallback(() => {
//     // fetch('https://api.npoint.io/a6646b11a6227275001d/products/')
//     // .then(resp => resp.json()).then(products => {
//     //     // console.log(products);
//     //     dispatch(loadAction(products))
//     // })
//    },[])// const { state: { products } } = useGlobalContext()
//     // const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProductAsyncAction())
    }, [dispatch]);

    function handleAddToCart(prod){
        dispatch(addItemAction({id : prod.id, name : prod.title}))
    }

    return (
        <div>
            <AddProduct />
            <ul>
                {products.map(prod => (
                    <li className="d-block mb-3" key={prod.id}>{prod.title}
                    <button onClick={() => handleAddToCart(prod)} className = "btn  m-3 btn-success"> add to cart</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}
