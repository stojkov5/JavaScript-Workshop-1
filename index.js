let shippingAmmout = 110;
if (shippingAmmout > 100) {
  console.log("Free shipping");
} else {
  console.log("$10 shipping fee");
}

let fee = shippingAmmout > 100 ? "Free Shipping" : "$10 Shipping Fee";
console.log(fee);
