let products = {
  1:{name:'প্রোডাক্ট ১', price:'৳ দাম', img:'images/product1.jpg'},
  2:{name:'প্রোডাক্ট ২', price:'৳ দাম', img:'images/product2.jpg'},
  3:{name:'প্রোডাক্ট ৩', price:'৳ দাম', img:'images/product3.jpg'},
  4:{name:'প্রোডাক্ট ৪', price:'৳ দাম', img:'images/product4.jpg'},
  5:{name:'প্রোডাক্ট ৫', price:'৳ দাম', img:'images/product5.jpg'},
  6:{name:'প্রোডাক্ট ৬', price:'৳ দাম', img:'images/product6.jpg'},
  7:{name:'প্রোডাক্ট ৭', price:'৳ দাম', img:'images/product7.jpg'},
  8:{name:'প্রোডাক্ট ৮', price:'৳ দাম', img:'images/product8.jpg'},
  9:{name:'প্রোডাক্ট ৯', price:'৳ দাম', img:'images/product9.jpg'},
  10:{name:'প্রোডাক্ট ১০', price:'৳ দাম', img:'images/product10.jpg'}
};

function openModal(id){
  let p = products[id];
  document.getElementById('modal-title').innerText = p.name;
  document.getElementById('modal-price').innerText = p.price;
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal').style.display='flex';
}

function closeModal(){
  document.getElementById('modal').style.display='none';
}

function orderProduct(){
  let title = document.getElementById('modal-title').innerText;
  let size = document.getElementById('size').value;
  let url = `https://wa.me/880123456789?text=আমি%20অর্ডার%20করতে%20চাই:%20${title},%20সাইজ:%20${size}`;
  window.open(url,'_blank');
}
