const e=async()=>{let e;try{e=await fetch("https://67a727f0510789ef0dfd2245.mockapi.io/movies/products").then(e=>e.json())}catch(t){e=t}return e},t=document.querySelector(".products-list"),s=e=>{let s=e.map(e=>`<li class="product-item" data-id="${e.id}">
            <p class="product-name">${e.name}</p>
            <p class="product-price">${e.price}</p>
            <p class="product-sort">${e.description}</p>
            <img src="${e.image}" class="product-img"></img>
<button class="edit-btn">
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Edit</span>
</button>
<button class="delete-btn">
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Delete</span>
</button>
        </li>`).join("");t.innerHTML=s},a=async e=>{try{return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/products/${e}`,{method:"DELETE"}).then(e=>e.json())}catch(e){console.log(e.message)}},n=async(e,t)=>{try{return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/products/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())}catch(e){console.log(e.message)}},c=()=>{let t;document.querySelectorAll(".edit-btn").forEach(e=>{e.addEventListener("click",e=>{document.querySelector(".edit-modal").classList.remove("is-hidden"),t=e.target.closest(".product-item").dataset.id})});let a=document.querySelector(".edit-form__info"),o=document.querySelector(".edit-modal");a.addEventListener("submit",async d=>{d.preventDefault(),o.classList.add("is-hidden");let l={name:`${a.elements.name.value}`,price:`${a.elements.price.value}`,description:`${a.elements.description.value}`,img:`${a.elements.img.value}`};await n(l,t).then(e=>console.log(e)),await e().then(e=>{s(e),i(),c()})}),document.querySelector(".close-edit-modal").addEventListener("click",()=>{document.querySelector(".edit-modal").classList.add("is-hidden")})},i=()=>{document.querySelectorAll(".delete-btn").forEach(t=>{t.addEventListener("click",async()=>{await a(t.parentElement.id).then(e=>e),await e().then(e=>{s(e),i(),c()})})})};e().then(e=>{s(e),i(),c()});const o=document.querySelector(".open-modal"),d=document.querySelector(".close-modal"),l=document.querySelector(".modal");o.addEventListener("click",e=>{e.preventDefault(),l.classList.remove("is-hidden")}),d.addEventListener("click",e=>{e.preventDefault(),l.classList.add("is-hidden")});const r=async e=>{try{return await fetch("https://67a727f0510789ef0dfd2245.mockapi.io/movies/products",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())}catch(e){console.log(e)}},m=document.querySelector(".form-info"),p=document.querySelector(".modal");m.addEventListener("submit",async t=>{t.preventDefault(),p.classList.add("is-hidden");let a={name:`${m.elements.name.value}`,price:`${m.elements.price.value}`,description:`${m.elements.description.value}`,img:`${m.elements.img.value}`};await r(a).then(e=>e),await e().then(e=>{s(e),i(),c()})});
//# sourceMappingURL=index.c68320e2.js.map
