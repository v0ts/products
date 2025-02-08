export const deleteProductApi = async (id) => {
  try {
  return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/products/${id}`, {
    method: "DELETE",
  }).then((data) => data.json())
}
catch (error) {
  console.log(error.message);
  }
};
