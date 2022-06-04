import React from 'react';
import {connect} from "react-redux";

import {addItemAction} from "../Shop/basketAction"
const BasketItem = ({item}) => {
    <li>{item.name}</li>
}

const Basket = (props) => {
    const {basket,dispatch} = props;
    const items = basket
    function handleLoadItems(evt){
        dispatch(addItemAction([{id : 1,name : "backpack"}]))
    }
    return (
        <div className="card">
            <div className="card-header">Basket</div>
            <div className="card-body">
                <ul>{items.length ? items.map(item => (
                    <BasketItem key={item.id} item={item} />))  : (
                        <li>{items.name}</li>
                    )}</ul>
            </div>
            <div className="card-footer"><button onClick={handleLoadItems} className="btn btn-primary">Load Items</button></div>
        </div>
    );
}

function mapStatetoProps(state){
    return {
        basket : state.basket
    }
}
// function mapDispatchToProps(dispatch){
//     return {
//         loadiItems : (action) => dispatch(action)
//     }
// }

// function connect(fn,fn2){
//     return function(OriginalComponent){
//         function NewComponent(props){
//             return <OriginalComponent {...props} />
//         }
//         return NewComponent
//     }
// }
export default connect(mapStatetoProps)(Basket);
