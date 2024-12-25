const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `<p>Please give a valid height.</p>`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `<p>Please give a valid weight.</p>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Construct the result message
    let message = `<p>Your BMI is <strong>${bmi}</strong>.</p>`;
    if (bmi < 18.6) {
      message += `<p>You are <strong>Underweight</strong>. </br>(BMI: Less than 18.6)</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += `<p>You are in the <strong>Normal Range</strong>. </br>(BMI: Between 18.6 and 24.9)</p>`;
    } else {
      message += `<p>You are <strong>Overweight</strong>. </br>(BMI: Greater than 24.9)</p>`;
    }

    // Display the result in the results div
    results.innerHTML = message;
  }
});

