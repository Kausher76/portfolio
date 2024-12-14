const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Optional: Change button text based on the current mode
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Toggle Light Mode';
        } else {
            toggleButton.textContent = 'Toggle Dark Mode';
        }
    });