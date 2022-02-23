import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
//inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    //init
    e.preventDefault();
    let doc;
    //check type of doc
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    //show doc
    console.log(doc);
});
