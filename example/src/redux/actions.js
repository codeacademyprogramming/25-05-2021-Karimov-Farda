

export function addAction(productTitle){
return {
    
        type:"PRODUCTS/ADD_PRODUCTS",
        payload:productTitle
    }
}
export function loadAction(products){
    return {
        
            type:"PRODUCTS/LOAD_PRODUCTS",
            payload:products
        }
    }
    

export function loadAsyncAction(){
    return function(dispatch){
        
fetch('https://api.npoint.io/a6646b11a6227275001d/products')
.then(resp => resp.json()).then(products => 
    // console.log(products);
    dispatch(loadAction(products)))

    }
}

export function addAsyncAction(productTitle){
    return function(dispatch){
        
fetch('https://httpbin.org/post',{
    method : "POST",
    body : JSON.stringify({title : productTitle})
})
.then(resp => resp.json()).then(products => 
    
    dispatch(addAction(products)))

    }
}