// Dummy Products
const products = [
    {id:1,name:"Brown Sneakers",price:1500,sizes:[40,41,42,43,44],colors:["Brown"],img:"images/dummy1.jpg"},
    {id:2,name:"Cream Sneakers",price:1300,sizes:[40,41,42,43,44],colors:["Beige"],img:"images/dummy2.jpg"},
    {id:3,name:"Ladies Sneakers",price:1500,sizes:[36,37,38,39,40],colors:["White"],img:"images/dummy3.jpg"},
    {id:4,name:"Panda Fashion ",price:1700,sizes:[40,41,42,43,44],colors:["Grey"],img:"images/dummy4.jpg"},
    {id:5,name:"Kicks Epsilon",price:3900,sizes:[38,39,40,41,42,43,44],colors:["Grey"],img:"images/dummy5.jpg"},
    {id:6,name:"Kicks Zeta",price:3600,sizes:[38,39,40,41,42,43,44],colors:["Black","Red"],img:"images/dummy6.jpg"},
    {id:7,name:"Kicks Eta",price:4100,sizes:[38,39,40,41,42,43,44],colors:["Blue","White"],img:"images/dummy7.jpg"},
    {id:8,name:"Kicks Theta",price:3300,sizes:[38,39,40,41,42,43,44],colors:["Black","Blue"],img:"images/dummy8.jpg"},
    {id:9,name:"Kicks Iota",price:3500,sizes:[38,39,40,41,42,43,44],colors:["Red","White"],img:"images/dummy9.jpg"},
    {id:10,name:"Kicks Kappa",price:3700,sizes:[38,39,40,41,42,43,44],colors:["Black","Grey"],img:"images/dummy10.jpg"}
];

let cart = [];

// Load products dynamically
const productsDiv = document.getElementById("products");
products.forEach(p=>{
    const card = document.createElement("div");
    card.className="product-card";
    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: ${p.price} Tk</p>
        <label>Size:</label>
        <select id="size-${p.id}">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select>
        <label>Color:</label>
        <select id="color-${p.id}">${p.colors.map(c=>`<option>${c}</option>`).join('')}</select>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(card);
});

// Add to Cart
function addToCart(id){
    const product = products.find(p=>p.id===id);
    const size = document.getElementById(`size-${id}`).value;
    const color = document.getElementById(`color-${id}`).value;
    cart.push({...product,size,color});
    renderCart();
}

// Render Cart
function renderCart(){
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML="";
    cart.forEach((item,i)=>{
        cartDiv.innerHTML+=`<p>${item.name} - ${item.size} - ${item.color} - ${item.price} Tk <button onclick="removeItem(${i})">Remove</button></p>`;
    });
    updateTotal();
}

function removeItem(index){
    cart.splice(index,1);
    renderCart();
}

function updateTotal(){
    const delivery = Number(document.getElementById("delivery-charge").value) || 0;
    const total = cart.reduce((sum,item)=>sum+item.price,0)+delivery;
    document.getElementById("total-price").innerText=total;
}

// Checkout
document.getElementById("checkout").addEventListener("click",()=>{
    const delivery = Number(document.getElementById("delivery-charge").value);
    const payment = document.getElementById("payment-method").value;
    const transaction = document.getElementById("transaction-id").value;

    if(cart.length===0){ alert("Cart is empty!"); return; }
    if(!delivery){ alert("Please enter delivery charge!"); return; }
    if(payment!=="COD" && transaction.trim()===""){ alert("Transaction ID required for non-COD!"); return; }

    alert("Order placed successfully! ✅");
    cart=[]; renderCart(); document.getElementById("delivery-charge").value=""; document.getElementById("transaction-id").value="";
});
