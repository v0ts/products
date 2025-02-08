export const addProductApi = async (addData) => {
  try {
    return await fetch("https://67a727f0510789ef0dfd2245.mockapi.io/movies/products", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
  } catch (error) {
    console.log(error);
  }
};