  // Display appointments from local storage
  function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    let tableBody = document.getElementById('appointments-list');
    tableBody.innerHTML = ''; // Clear existing rows

    appointments.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.studentName}</td>
            <td>${appointment.teacherName}</td>
            <td>${appointment.appointmentDate}</td>
            <td>${appointment.appointmentTime}</td>
            <td>${appointment.status}</td>
            <td>
                <button onclick="approveAppointment(${index})">Approve</button>
                <button onclick="deleteAppointment(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to approve appointment
function approveAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Update appointment status to "Approved"
    appointments[index].status = 'Approved';
    
    // Update local storage
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Re-display appointments
    displayAppointments();
}

// Function to delete appointment
function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Remove appointment from array
    appointments.splice(index, 1);
    
    // Update local storage
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Re-display appointments
    displayAppointments();
}

// Call displayAppointments when the page loads
displayAppointments();