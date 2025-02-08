export const getProductsAPI = async ()=>{
    let response
    try{
     response = await fetch('https://67a727f0510789ef0dfd2245.mockapi.io/movies/products').then(data=> data.json())
    } catch(error) {
       response = error
    }
    return response
}