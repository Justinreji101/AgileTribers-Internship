const doubleClickBtn = document.getElementById('doubleClickBtn');
        const outputHeading = document.getElementById('outputHeading');
        const clickCounter = document.getElementById('clickCounter');
        
        let doubleClickCount = 0;
        
        doubleClickBtn.addEventListener('dblclick', function() {
            
            doubleClickCount++;
            
            outputHeading.textContent = "Button was double-clicked!";
            outputHeading.classList.add('pulse');
            
            console.log("Button was double-clicked!");
            
            clickCounter.textContent = `Double clicks: ${doubleClickCount}`;
            
            setTimeout(() => {
                outputHeading.classList.remove('pulse');
            }, 500);

            this.style.backgroundColor = '#27ae60';
            setTimeout(() => {
                this.style.backgroundColor = '#9b59b6';
            }, 300);
        });
        let clickTimeout;
        doubleClickBtn.addEventListener('click', function() {
            clearTimeout(clickTimeout);
            clickTimeout = setTimeout(() => {
                outputHeading.textContent = "That was a single click. Try double-clicking!";
                outputHeading.style.color = '#e74c3c';
                setTimeout(() => {
                    outputHeading.style.color = '';
                }, 1500);
            }, 300);
        });