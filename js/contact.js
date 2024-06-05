function Alert(){
    let text = "Would you like to send your form now?";
    if (confirm(text) == true) {
    window.alert("Thank you for submitting!")
      return true;
    } else {
      return false;
    }
  }