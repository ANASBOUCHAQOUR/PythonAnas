function createCalendar(year, month) {
    // Get the first day of the month (0-6, where 0 is Sunday)
    const firstDay = new Date(year, month - 1, 1).getDay();
    // Convert Sunday (0) to 6, and shift other days back by 1
    const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
    
    // Get the number of days in the month
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Get month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Create table element
    const table = document.createElement('table');
    
    // Create header row with weekday names
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    for (const day of weekdays) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    }
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    // Create first row
    let row = document.createElement('tr');
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayAdjusted; i++) {
        const td = document.createElement('td');
        row.appendChild(td);
    }
    
    // Add days to the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const td = document.createElement('td');
        td.textContent = day;
        
        // Highlight today's date
        const today = new Date();
        if (day === today.getDate() && 
            month === today.getMonth() + 1 && 
            year === today.getFullYear()) {
            td.classList.add('today');
        }
        
        row.appendChild(td);
        
        // Start new row after Sunday
        if ((firstDayAdjusted + day) % 7 === 0) {
            tbody.appendChild(row);
            row = document.createElement('tr');
        }
    }
    
    // Add remaining empty cells to complete the last row
    const remainingCells = 7 - ((firstDayAdjusted + daysInMonth) % 7);
    if (remainingCells < 7) {
        for (let i = 0; i < remainingCells; i++) {
            const td = document.createElement('td');
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    
    // Add month and year as caption
    const caption = document.createElement('caption');
    caption.textContent = `${monthNames[month - 1]} ${year}`;
    table.insertBefore(caption, table.firstChild);
    
    // Add the calendar to the page
    document.getElementById('calendar').appendChild(table);
}

// Create calendar for January 2025
createCalendar(2025, 1);
