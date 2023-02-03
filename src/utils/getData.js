const API = process.env.API;

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    const apiResponse = data.results[0]
    return apiResponse;
  } catch (error) {
    console.error("Error on fetch character data " + error?.message);
  };
};

export default getData;