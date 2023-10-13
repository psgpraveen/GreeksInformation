import React, { useEffect, useState } from 'react'
import FeatureCard from "../../components/FeatureCard";
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products/categories");
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);
  
    if (categories.length === 0) {
      return <div>Loading ....</div>;
    }
  
    return (
        <FeatureCard Cards={categories} />
    )
}

export default Categories
