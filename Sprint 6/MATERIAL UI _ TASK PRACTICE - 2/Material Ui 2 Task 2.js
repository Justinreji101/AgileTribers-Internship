document.addEventListener('DOMContentLoaded', function() {
      // Menu item click handler
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
        item.addEventListener('click', function() {
          menuItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // View switcher
      const viewOptions = document.querySelectorAll('.view-option');
      viewOptions.forEach(option => {
        option.addEventListener('click', function() {
          viewOptions.forEach(o => o.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // Initialize performance chart
      const ctx = document.getElementById('performanceChart').getContext('2d');
      const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Portfolio Value',
            data: [25000, 28000, 32000, 35000, 42000, 48000],
            borderColor: '#3f51b5',
            backgroundColor: 'rgba(63, 81, 181, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    });