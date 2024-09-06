// script.js
document.getElementById('crush-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const crushName = document.getElementById('crush-name').value.trim();
    
    if (crushName) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Hai ${crushName}, kamu telah ditembak hari ini`;
        
        // Reset form input
        document.getElementById('crush-name').value = '';
        
        // Add a fade-out effect if you want (optional)
        // resultDiv.classList.add('fade-out');
        // setTimeout(() => resultDiv.classList.remove('fade-out'), 3000);
    } else {
        alert('Silakan masukkan nama crush!');
    }
});