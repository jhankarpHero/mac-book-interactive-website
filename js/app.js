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

/*
1. find the private repo link (either assignment submitted or click on the link to create the private repo)
2. create a folder where to put the repo .git file [transferAssignment]
3. copy .git link from your private repo
4. open cmd and cd to the transferAssignment folder
5. git clone --bare <paste the .git link of the private repo>
6. cd to the private repo .git folder
7. go to your github profile and create a public repo
8. copy the .git link of your public repo
7. git push --mirror <.git link to your public repo>
8. [ optional] git remote set-url origin <.git link to your public repo>
------------------------
add some changes
1. git clone <public repo .git link>
2. make changes
3.

*/