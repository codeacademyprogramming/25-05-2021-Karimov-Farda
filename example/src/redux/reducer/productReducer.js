
function createUniqueID(items) {
    let latestId = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestId + 1;
}


const initialState = [
]


function reducer(state = initialState, action) {

    switch (action.type) {
        case 'PRODUCTS/LOAD_PRODUCTS':
            return action.payload;

        default:
            return state;
    }
}

export default reducer;