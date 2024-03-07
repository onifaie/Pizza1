import { useState, useEffect } from "react";
import getpizzalist from "../utilti/api.js";
import { Link } from "react-router-dom";

export default function PizzaList() {
  const [products, setproducts] = useState();
  useEffect(() => {
    const getPizzaListData = async () => {
      const data = await getpizzalist();
      console.log(data);
      setproducts(data);
    };
    getPizzaListData();
  }, []);
  return (
    <div className=" container">
      <div className="grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <Link
            to={`/productDetails/${product._id.toString()}`}
            key={product._id.toString()}
          >
            <img
              src={product.img}
              alt="test"
              height={150}
              width={150}
              className=" mb-6"
            />
            <p className=" font-semibold text-3xl">{product.title}</p>
            <p className=" font-semibold text-red-500">{product.desc}</p>
            <p className=" font-semibold text-red-500">{product.prices[0]}</p>
            <p className=" font-semibold text-red-500">
              {/* {product.createdAt.toLocaleTimeString()} */}
            </p>
            <p className=" font-semibold text-red-500">{product.createdAt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
