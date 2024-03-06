import { useState, useEffect } from "react";
import getpizzalist from "../utilti/api.js";

import React from "react";

export default function PizzaList() {
  const [products, setproducts] = useState();
  useEffect(() => {
    const getPizzaListData = async () => {
      const data = await getpizzalist();
      console.log(data.data);
      setproducts(data.data);
    };
    getPizzaListData();
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <div key={product._id.toString()} product={product._id} />
      ))}
    </div>
  );
}
