function generateRandomNumber() {
  // Get the minimum and maximum values entered by the user
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const resultElement = document.getElementById('result');

  // Check if the min and max are valid numbers
  if (isNaN(min) || isNaN(max)) {
    resultElement.innerText = 'Please enter valid numbers for both minimum and maximum values.';
    return;
  }

  // Ensure min is less than or equal to max
  if (min > max) {
    resultElement.innerText = 'Minimum value should be less than or equal to the maximum value.';
    return;
  }

  // Generate random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display the random number
  resultElement.innerText = `Random Number: ${randomNumber}`;
}