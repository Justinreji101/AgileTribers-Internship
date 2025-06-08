document.addEventListener('DOMContentLoaded', function() {
            const searchBtn = document.getElementById('search');
            const arrayInput = document.getElementById('array-input');
            const searchElementInput = document.getElementById('search-element');
            const arrayVisualization = document.getElementById('array-visualization');
            const firstIndexSpan = document.getElementById('first-index');
            const lastIndexSpan = document.getElementById('last-index');
            
            // Function to find first and last occurrences
            function findOccurrences(array, element) {
                const firstIndex = array.indexOf(element);
                const lastIndex = array.lastIndexOf(element);
                
                return {
                    firstIndex: firstIndex,
                    lastIndex: lastIndex
                };
            }
            
            function searchOccurrences() {
                try {
                    // Get array input and convert to array
                    const arrayStr = arrayInput.value;
                    const element = searchElementInput.value.trim();
                    
                    const array = arrayStr.split(',')
                                       .map(item => item.trim())
                                       .filter(item => item.length > 0);
                    
                    if (array.length === 0) {
                        throw new Error('Please enter a valid array');
                    }
                    
                    if (element === '') {
                        throw new Error('Please enter an element to search for');
                    }
                    
                    // Find occurrences
                    const occurrences = findOccurrences(array, element);
                    
                    // Display array visualization
                    arrayVisualization.innerHTML = '';
                    array.forEach((item, index) => {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'array-item';
                        itemElement.textContent = item;
                        itemElement.setAttribute('data-index', index);
                        
                        if (index === occurrences.firstIndex && occurrences.firstIndex !== -1) {
                            itemElement.classList.add('first-occurrence');
                        }
                        
                        if (index === occurrences.lastIndex && occurrences.lastIndex !== -1) {
                            itemElement.classList.add('last-occurrence');
                        }
                        
                        if (item === element && (index === occurrences.firstIndex || index === occurrences.lastIndex)) {
                            itemElement.classList.add('occurrence');
                        }
                        
                        arrayVisualization.appendChild(itemElement);
                    });
                    
                    // Display results
                    firstIndexSpan.textContent = occurrences.firstIndex !== -1 ? occurrences.firstIndex : 'Not found';
                    lastIndexSpan.textContent = occurrences.lastIndex !== -1 ? occurrences.lastIndex : 'Not found';
                    
                    // Highlight inputs briefly
                    arrayInput.style.borderColor = 'var(--success)';
                    searchElementInput.style.borderColor = 'var(--success)';
                    setTimeout(() => {
                        arrayInput.style.borderColor = '#ddd';
                        searchElementInput.style.borderColor = '#ddd';
                    }, 1000);
                    
                } catch (error) {
                    alert(error.message);
                    arrayInput.style.borderColor = 'var(--accent)';
                    searchElementInput.style.borderColor = 'var(--accent)';
                }
            }
            
            searchBtn.addEventListener('click', searchOccurrences);
            
            // Trigger search on Enter key in either input
            arrayInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchOccurrences();
                }
            });
            
            searchElementInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchOccurrences();
                }
            });
            
            // Initial search
            searchOccurrences();
        });