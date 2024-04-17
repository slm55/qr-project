import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// query parameter
// ?currency=dollar
// ?category=t-shirts
// ?size=m
// ?color=black

function Shop() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios({
      method: "get",
      url: "https://65f5b6eb41d90c1c5e0a06aa.mockapi.io/products",
      responseType: "json",
    })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (category) {
          const categoryProducts = data.find(
            (obj) => obj.category == category
          ).products;
          setData(categoryProducts);
          setLoading(false);
        } else {
          const allProducts = [];
          data.forEach((obj) => {
            allProducts.push(...obj.products);
          });
          setData(allProducts);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="flex w-full h-full items-center justify-center flex-wrap">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && data.map(product => <div>{product.name}</div>)}
    </div>
  );
}

export default Shop;
