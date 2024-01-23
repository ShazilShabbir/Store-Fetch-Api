fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata)
    let data1 = "";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <img src=${values.image} alt="" class="images" />
        <h1 class="title">${values.title}</h1>
        <p>${values.description} </p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        <button class="button">Buy Now<button/>
      </div>
`})
document.getElementById("cards").innerHTML = data1

}).catch((error)=>{
console.log(error)
})