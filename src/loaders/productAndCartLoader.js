import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
  // get the products
  const productsData = await fetch("http://localhost:5000/products");
  const { storedProduct: products } = await productsData.json();
  const initialCart = [];
  // get save cart
  const saveCart = getStoredCart();
  // console.log('saveCart', saveCart);
  for (const id in saveCart) {
    // console.log(id);
    const addedProduct = products.find((product) => product._id === id);
    // console.log(addedProduct);
    if (addedProduct) {
      const quantity = saveCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return { products, initialCart };
};
