document.addEventListener('DOMContentLoaded', function() {
            const originalStringInput = document.getElementById('originalString');
            const searchStringInput = document.getElementById('searchString');
            const replacementStringInput = document.getElementById('replacementString');
            const replaceButton = document.getElementById('replaceButton');
            const resultContainer = document.getElementById('resultContainer');
            const resultText = document.getElementById('resultText');
            
            replaceButton.addEventListener('click', function() {
                const originalString = originalStringInput.value;
                const searchString = searchStringInput.value;
                const replacementString = replacementStringInput.value;
                
                if (!originalString || !searchString) {
                    alert('Please enter both the original string and the substring to replace.');
                    return;
                }
                
                try {
                    const result = originalString.replaceAll(searchString, replacementString);
                    resultText.textContent = result;
                    resultContainer.style.display = 'block';
                } catch (error) {
                    alert('An error occurred: ' + error.message);
                }
            });
            
            // Add some example text when clicking on the input fields
            const inputs = [originalStringInput, searchStringInput, replacementStringInput];
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    if (!this.value) {
                        switch(this.id) {
                            case 'originalString':
                                this.value = 'apple banana apple grape apple';
                                break;
                            case 'searchString':
                                this.value = 'apple';
                                break;
                            case 'replacementString':
                                this.value = 'orange';
                                break;
                        }
                    }
                });
            });
        });