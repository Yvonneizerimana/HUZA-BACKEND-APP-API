const form=document.getElementById("payForm");
form.addEventListener("submit",paynow);
function paynow(e){
    e.preventDefault();
   FlutterwaveCheckout({
public_key:"FLWPUBK_TEST-3efe7f0f39073f301996e89334245d26-X",
tx_ref:"ak_"+Math.floor((Math.random()*100000000)+1),
amount:document.getElementById("amount").value,
currency:"RWF",
customer:{
    email:document.getElementById("email").value,
    phoneNumber:document.getElementById("phoneNumber").value,
    name:document.getElementById("fullName").value
},
callback:function(data){
    console.log(data);
}

   })
}