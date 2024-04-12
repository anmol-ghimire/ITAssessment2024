const calculate = () => {
    
    const numbersArray = document.getElementById('numbers').value.split(',').map(Number);
  
    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    const product = numbersArray.reduce((acc, curr) => acc * curr, 1);
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Sum: ${sum}, Product: ${product}`;
  }