
import basketReducer from "./basketReducer";
import productReducer from "./productReducer";

import {combineReducers} from 'redux'
const reducer = combineReducers({
    products : productReducer,
    basket : basketReducer
})

// export default function reducer(state = {}, action) {
//     return {
//         ...state,
//         products: productReducer(state.products, action),
//         basket: basketReducer(state.basket, action),
//     }
// }
export default reducer
