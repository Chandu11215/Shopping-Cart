import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions"

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  

  // here we are fetching the data from server and once we fetch the data we dispatch an action and it goes to the reducer and then we update the data in the store 

 // after updating the data we fetch  the data using useSelector and we display all the products on the prduct list component

// when we click on any of the product we go to the product details page where we again fetch tthe details of a particular product and once we get the data we dispatch an action and it goes to the reducer and the we update the state for the selected product 
  
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing
