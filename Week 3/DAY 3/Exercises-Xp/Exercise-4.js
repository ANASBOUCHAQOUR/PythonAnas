const form = document.getElementById('MyForm');

// handle form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // radius value
    const radius = document.getElementById('radius').value;
    
    // calculate volume - V = (4/3) * π * r³
    const volume = (4/3) * Math.PI * (radius ** 3);
    
    // result
    document.getElementById('volume').value = volume.toFixed(2);
});
