import PizzaList from "../componets/PizzaList";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="text-black items-center text-center underline text-4xl my-2 font-semibold">
        <h5> Our Products </h5>
      </div>

      <PizzaList />
    </div>
  );
}
