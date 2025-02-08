export const editProductApi = async (data, editedProductId) => {
  try {
    return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/products/${editedProductId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
  } catch (error) {
    console.log(error.message);
  }
};
