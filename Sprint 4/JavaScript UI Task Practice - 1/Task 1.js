const button = document.getElementById('clickButton');
        
        button.addEventListener('click', function() {
            console.log("Button Clicked!");
            
            button.textContent = "Clicked!";
            setTimeout(() => {
                button.textContent = "Click Me";
            }, 1000);
        });