function calculateCost() { //to enter the number
    var price = document.getElementById('price').value;
    var liters = document.getElementById('liters').value;
    
    if (price && liters) { //if & else condition
        var totalCost = price * liters; //multiplying the liter and the purchased liters
        document.getElementById('total').innerText = "Total Cost: $" + totalCost.toFixed(2); //total
    } else {
        document.getElementById('total').innerText = "Please enter valid values.";
    }
}