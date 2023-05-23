import { getStoredCart } from "../utilities/fakedb";

export const productStoreCardLoader= async ()=>{
    // get products 
    const ProductData = await fetch("products.json");
    const products = await ProductData.json();

    // getCart

    const savedCart = getStoredCart();
    const previousCart=[];

    for(const id in savedCart){
        const AddedProduct = products.find(product => product.id === id);
        if(AddedProduct){
            const quantity=savedCart[id];
            AddedProduct.quantity=quantity;
            previousCart.push(AddedProduct);
        }

    }
    return {products:products,  previousCart };

}