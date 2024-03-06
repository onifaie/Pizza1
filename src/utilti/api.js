import axios from "axios";

// console.log(import.meta.env.VITE_BASE_URL);
const getpizzalist = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/products`
    );
    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getpizzalist;
