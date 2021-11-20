//add the submit event listener to the form
document.getElementById("salesTaxForm").addEventListener("submit", salesTaxForm);
//form event
function salesTaxForm(event) 
{
    // preventDefault method prevents the browser from clearing user-input entries when the user submits the form
    event.preventDefault();
    //create sales tax class and pass in amount
    var amount = document.getElementById("amount").value;
    var tax = new SalesTax(amount);
    //add rate to the object
    var rate = document.getElementById("rate").value;
    tax.taxRate(rate);
    //calculate tax and show output
    tax.calculate();
}

//sales tax calculator class
class SalesTax{
    //constructor with parameter for purchase amount
    constructor(purchaseAmount){
        this.purchaseAmount = purchaseAmount;
    }
    //method for adding tax rate
    taxRate(rate){
        this.rate = rate;
    }
    //calculate output
    calculate(){
        var taxAmount = parseFloat(this.purchaseAmount) * parseFloat(this.rate);
        var total = parseFloat(this.purchaseAmount) + taxAmount;
        document.getElementById("output1").innerHTML = "The tax amount is: $" + taxAmount.toFixed(2);
        document.getElementById("output2").innerHTML = "The total with tax is: $" + total.toFixed(2);
    }
}
