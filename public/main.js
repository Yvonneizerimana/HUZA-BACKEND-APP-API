const form = document.getElementById("payForm");

form.addEventListener("submit", payNow);

function payNow(e) {
    e.preventDefault();

    // Initialize Flutterwave Checkout
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-3efe7f0f39073f301996e89334245d26-X",
        tx_ref: "ak_" + Math.floor((Math.random() * 100000000) + 1),
        amount: document.getElementById("amount").value,
        currency: "RWF",
        customer: {
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            name: document.getElementById("fullName").value
        },
        callback: function (data) {
            console.log(data);
            // You can handle successful payment here
        },
        onclose: function () {
            console.log('Payment modal closed');
            // You can handle modal close event here
        },
        customizations: {
            title: "Your Payment Title",
            description: "Your Payment Description",
            logo: "URL_to_your_logo",
        },
    });
}
