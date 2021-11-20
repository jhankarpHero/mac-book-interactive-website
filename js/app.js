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
1. find the link of the private repo of your assignment
2. create a folder
3. open cmd and cd to that folder [myAssignments]

4. git clone --bare <private repo .git link>

5. cd to the folder of the assignment .git folder

6. go to github .com and create a public repo

7. git push --mirror <public repo .git link>

---------------------
push code to the public repo from assignment folder of you Computer
1. git remote set-url origin <public repo .git link>

--------
alternative:
1. clone your public repo

*/