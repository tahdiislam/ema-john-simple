// use local storage to manage cart data
const addToDb = id =>{
    // console.log('add db function')
    let shoppingCart = {};

    // get the shopping cart from local Storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity 
    const quantity = shoppingCart[id]
    if(quantity){
        const newquantity = quantity + 1;
        shoppingCart[id] = newquantity;
    } else{
        shoppingCart[id] = 1;
    }
    
    // set to localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart
}