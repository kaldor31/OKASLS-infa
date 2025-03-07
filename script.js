
document.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to Okasls Clothing Store! We hope you love our latest collections.");
    
    const shopNowButton = document.getElementById('shopNowBtn');
    shopNowButton.addEventListener('click', function() {
        alert('Redirecting to the shop...');

        window.location.href = '#'; 
    });
});
