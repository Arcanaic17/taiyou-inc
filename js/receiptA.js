

function update(){
    const txt1 = document.getElementById('quant_of_prod');
    const out1 = document.getElementById('p-amount');
      
    const txt2 = document.getElementById('address_of_user');
    const out2 = document.getElementById('p-address');

    out1.innerHTML = txt1.value;
    out2.innerHTML = txt2.value;


        // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
        num1 = parseFloat(document.getElementById("quant_of_prod").value);
        var num2 = 15.0;
    
        // Set the inner HTML of the element with the id "result" to the product of the two numbers
        document.getElementById("total_amount").innerHTML = num1 * num2;
    }


// function priceCheck(){
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
   // num1 = parseFloat(document.getElementById("quant_of_prod").value);
   // var num2 = 35.0;

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    //document.getElementById("total_amount").innerHTML = num1 * num2;
//}


function Alert(){
    let text = "Are you sure you want to pay now?";
    if (confirm(text) == true) {
      window.location = "order_complete.html"
      return true;
    } else {
      return false;
    }
  }
