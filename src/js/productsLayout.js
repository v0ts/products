const productsList = document.querySelector('.products-list')

export const createMarkup = (productsData)=>{
    const markup = productsData.map(obj=>
        `<li class="product-item" data-id="${obj.id}">
            <p class="product-name">${obj.name}</p>
            <p class="product-price">${obj.price}</p>
            <p class="product-sort">${obj.description}</p>
            <img src="${obj.image}" class="product-img"></img>
<button class="edit-btn" type="button">
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Edit</span>
</button>
<button class="delete-btn" type="button">
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Delete</span>
</button>
        </li>`
    ).join('')
    productsList.innerHTML = markup
}