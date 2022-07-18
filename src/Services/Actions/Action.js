import { ADD_TO_CART } from '../Constant'
export const addToCart = (data) => {
    console.log("Action", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}
// export const removetocart = (data) => {
//     return {
//         type: "REMOVE_TO_CART",
//         data: data
//     }
// }