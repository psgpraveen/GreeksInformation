import React, { useEffect, useState } from "react";
import PSG from "../../components/shreya";
import Product from "../../components/productCard";
import Stat from "../../components/stat";
import Categories from "../../components/categories";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (  
    <>
      <PSG />
    <Categories />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font m-3 origin-center">
          Product
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>{
        products.length>0?<Product products={products}/>:<div>Loading ....</div>
      }
      <Product />
      <Stat />
     
    </>
  );
};

export default Home;
