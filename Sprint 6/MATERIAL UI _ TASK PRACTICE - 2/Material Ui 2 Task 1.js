document.addEventListener('DOMContentLoaded', function() {
      // Menu item click handler
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
        item.addEventListener('click', function() {
          menuItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // Simulate chart loading
      setTimeout(() => {
        const placeholders = document.querySelectorAll('.chart-placeholder');
        placeholders.forEach(p => {
          p.innerHTML = '<span style="color: var(--primary);">Chart loaded successfully</span>';
        });
      }, 1500);
    });