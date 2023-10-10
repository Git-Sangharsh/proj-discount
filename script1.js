function main() {
    // Get the values from the input fields
    let mainPrice = parseFloat(document.getElementsByClassName('main-price')[0].value);
    let discount = parseFloat(document.getElementsByClassName('discount')[0].value);
  
    // Calculate the price after discount
    let priceAfterDiscount = mainPrice - (mainPrice * (discount / 100));
  
    // Calculate the amount saved
    let savedAmount = mainPrice - priceAfterDiscount;
  
    // Display the results
    document.getElementsByClassName('after-discount')[0].value = priceAfterDiscount.toFixed(2);
    document.getElementsByClassName('saved')[0].value = savedAmount.toFixed(2);
  }
