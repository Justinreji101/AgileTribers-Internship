const hoverDiv = document.getElementById('hoverDiv');
        const eventStatus = document.getElementById('eventStatus');
        const eventLog = document.getElementById('eventLog');
        
        hoverDiv.addEventListener('mouseenter', function() {
            eventStatus.textContent = "Mouse entered!";
            eventStatus.className = "status-active";
            
            this.classList.add('hovered');
            this.textContent = "Mouse is inside!";
            
            console.log("Mouse entered!");
            
            addLogEntry("Mouse entered");
        });
        
        hoverDiv.addEventListener('mouseleave', function() {
            eventStatus.textContent = "Mouse left!";
            eventStatus.className = "status-inactive";
            
            this.classList.remove('hovered');
            this.textContent = "Hover Over Me";
            
            console.log("Mouse left!");
            
            addLogEntry("Mouse left ");
        });
        function addLogEntry(message) {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.textContent = `[${timeString}] ${message}`;
            eventLog.prepend(logEntry);
            
            if (eventLog.children.length > 10) {
                eventLog.removeChild(eventLog.lastChild);
            }
        } 