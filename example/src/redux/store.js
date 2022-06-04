import { createStore, applyMiddleware } from "redux";
import reduxThunkMiddleware from 'redux-thunk'
import reducer from './reducer/index'

import { loadAction} from '../redux/actions'
const logger = storeAPI => next => action => {
    console.log("Store before action dispatch",storeAPI.getState());
    console.log("Action dispatch",action);
    const result = next(action)
    return result;
}

// function sayHiForNoRease(storeAPI){
//     return function(next){
//         return function(action){
//             // console.log('storeAPI',storeAPI);
//             // console.log('next',next);
//             // console.log('action',action)
//             console.log('hello',action)
//             return next(action)
//         }
//     }
// }




const middlewares = applyMiddleware(
    // sayHiForNoRease,
    logger,
    reduxThunkMiddleware
    )

const store = createStore(reducer,middlewares);

// const midRef = someMiddleware(storeAPI);
// const actionRef = midRef(() => {console.log("magical next function here")})
// actionRef({type : "action",payload : 'data'})
export default store;