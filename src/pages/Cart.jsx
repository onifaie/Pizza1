export default function Cart() {
  return (
    <div className="container mx-auto">
      <div className="gride gride-2 gap-4 mt-4 ">
        <div className="bg-orange-500">
          <div className=" bg-red-500">
            <img
              width={200}
              height={200}
              src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            />
          </div>
        </div>
        <div className="ml-10">
          <h2>Title : product Details </h2>
          <h2>Price : 35 $ </h2>
          <h2>Zise : Larg Midum Small </h2>
          <button className=" btn btn-danger bg-green-500">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
