document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const findButton = document.getElementById('findButton');
    const randomButton = document.getElementById('randomButton');
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const primeResult = document.getElementById('primeResult');
    const learnMoreButton = document.getElementById('learnMore');
    
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // Function to find first prime number in array
    function findFirstPrime(numbers) {
        return numbers.find(num => isPrime(num));
    }
    
    // Display number sequence with prime highlighted
    function displaySequence(numbers, primeIndex) {
        sequenceDisplay.innerHTML = '';
        
        numbers.forEach((num, index) => {
            const numberChip = document.createElement('div');
            numberChip.className = 'number-chip';
            numberChip.textContent = num;
            
            if (index === primeIndex) {
                numberChip.classList.add('prime-chip');
            }
            
            sequenceDisplay.appendChild(numberChip);
        });
    }
    
    // Display prime result
    function displayPrimeResult(prime) {
        primeResult.innerHTML = '';
        
        if (prime !== undefined) {
            const primeDisplay = document.createElement('div');
            primeDisplay.className = 'prime-display';
            primeDisplay.textContent = prime;
            primeResult.appendChild(primeDisplay);
        } else {
            const noPrime = document.createElement('div');
            noPrime.className = 'no-prime';
            noPrime.innerHTML = `
                <i class="fas fa-times-circle"></i>
                <p>No prime numbers found in the sequence</p>
            `;
            primeResult.appendChild(noPrime);
        }
    }
    
    // Process input and display results
    function processInput() {
        const inputValue = numberInput.value.trim();
        
        if (!inputValue) {
            alert('Please enter some numbers!');
            return;
        }
        
        // Split input by commas and convert to numbers
        const numbers = inputValue.split(',').map(item => {
            const num = parseFloat(item.trim());
            return isNaN(num) ? NaN : num;
        });
        
        // Check for invalid numbers
        if (numbers.some(isNaN)) {
            alert('Please enter valid numbers separated by commas!');
            return;
        }
        
        // Find first prime number
        const firstPrime = findFirstPrime(numbers);
        const primeIndex = firstPrime ? numbers.indexOf(firstPrime) : -1;
        
        // Display results
        displaySequence(numbers, primeIndex);
        displayPrimeResult(firstPrime);
    }
    
    // Generate random numbers
    function generateRandomNumbers() {
        const count = Math.floor(Math.random() * 10) + 5; // 5-14 numbers
        const numbers = [];
        
        for (let i = 0; i < count; i++) {
            // Generate numbers between 1 and 50
            numbers.push(Math.floor(Math.random() * 50) + 1);
        }
        
        numberInput.value = numbers.join(', ');
        processInput();
    }
    
    // Learn more about primes
    function learnMore() {
        window.open('https://en.wikipedia.org/wiki/Prime_number', '_blank');
    }
    
    // Event listeners
    findButton.addEventListener('click', processInput);
    randomButton.addEventListener('click', generateRandomNumbers);
    learnMoreButton.addEventListener('click', learnMore);
    
    // Also process when Enter is pressed in the input field
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processInput();
        }
    });
    
    // Generate some random numbers on page load
    generateRandomNumbers();
});