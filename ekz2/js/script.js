document.getElementById('numberInput').addEventListener('blur', function() {
    const value = parseInt(this.value, 10);
    
    if (value >= 1 && value <= 100) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});
