import { createContext, useContext, useReducer } from "react";

function createUniqueID(items) {
    let latestId = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestId + 1;
}

const GlobContext = createContext();

const initialState = {
    products: [
        
    ],
    basket: {
        items: []
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'PRODUCTS/ADD_PRODUCTS':

            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        id: createUniqueID(state.products),
                        title: action.payload
                    }
                ]
            };

        case 'BASKET/ADD_ITEM':

            return {
                ...state,
                basket: {
                    ...state.basket,
                    items: [
                        ...state.basket.items,
                        {
                            id: createUniqueID(state.basket.items),
                            title: action.payload
                        }
                    ]
                }
            };

        default:
            return state
    }
}

function GlobContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </GlobContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobContext);
    return context
}

export {
    GlobContextProvider,
    useGlobalContext
}