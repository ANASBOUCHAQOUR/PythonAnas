// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const table = document.body.firstElementChild;
    
    // Check table exists
    if (!table) {
        console.error('Table not found!');
        return;
    }

    const rows = table.rows;
    
    // Color diagonal cells red
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[i]) {  // Check if cell exists
            rows[i].cells[i].style.backgroundColor = 'red';
        }
    }
});
