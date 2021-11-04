import fakestoreapi from '../../apis/fakeStoreApi' 
import { ActionTypes } from "../constants/action-types";


export const fetchProducts = () => async  (dispatch) => {
  
        const response = await fakestoreapi.get("/products")
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}


export const fetchProduct = (id) => async  (dispatch) => {
  
        const response = await fakestoreapi.get(`/products/${id}`)
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

// when we actually make async api call in our action creator  we need to conver synchronous action creator to Asynchronous action creator

// this conversion is possible if we use a middleware called thunk 

// Redux thunk which is a redux middleware  is used for converting synchronous to asynchronous  action creator
