import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL);
const getpizzalist = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/products`
    );
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getPizzaItem = async ({ id }) => {
  try {
    // eslint-disable-next-line no-undef
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/products/${id}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getpizzalist, getPizzaItem };
