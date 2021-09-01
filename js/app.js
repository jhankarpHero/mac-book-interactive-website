const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-cost");
const discountTotalPrice = document.getElementById("discount-total-price");
const couponCode = document.getElementById("coupon-code");

function memoryPriceCalculator(size) {
    let memoryCostValue = memoryCost.innerText;
    if (size == "8gb") {
        memoryCost.innerText = 0;
    }
    if (size == "16gb") {
        memoryCost.innerText = 180;
    }
    totalPriceCalculator();
}
function storagePriceCalculator(size) {

    if (size == "256gb") {
        storageCost.innerText = 0;

    }
    if (size == "512gb") {
        storageCost.innerText = 100;
    }
    if (size == "1tb") {
        storageCost.innerText = 180;
    }
    totalPriceCalculator();
}
function deliveryPriceCalculator(day) {

    if (day == "aug25") {
        deliveryCost.innerText = 0;

    }
    if (day == "aug21") {
        deliveryCost.innerText = 20;
    }
    totalPriceCalculator();
}

function totalPriceCalculator() {
    let memoryCostValue = parseInt(memoryCost.innerText);
    let storageCostValue = parseInt(storageCost.innerText);
    let deliveryCostValue = parseInt(deliveryCost.innerText);
    let totalPrice = memoryCostValue + storageCostValue + deliveryCostValue + 1299;
    totalCost.innerText = totalPrice;
    discountTotalPrice.innerText = totalPrice;

}

function couponCodeMatcher() {
    let totalCostValue = totalCost.innerText;
    let couponCodeValue = couponCode.value;
    if (couponCodeValue.toLowerCase() === "stevekaku") {
        let discountTotalPriceValue = parseFloat(totalCostValue) - (parseFloat(totalCostValue) * 0.25);

        discountTotalPrice.innerText = discountTotalPriceValue;
        couponCode.value = ""
    }
    else {
        alert("Invalid pinTry again.");
        couponCode.value = "";
    }
}