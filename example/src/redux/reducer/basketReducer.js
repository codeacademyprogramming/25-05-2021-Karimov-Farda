
function createUniqueID(items) {
    let latestId = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestId + 1;
}

const initialState = {
    items: []
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'BASKET/LOAD_ITEMS':

            return {
                ...state,
                items: action.payload
            };
        case 'BASKET/ADD_ITEMS':

            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: createUniqueID(state.items),
                    name: action.payload
                    }
                ]
            };
        default:
            return state;
    }
}

export default reducer;