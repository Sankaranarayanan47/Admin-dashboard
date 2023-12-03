document.addEventListener('DOMContentLoaded', function () {
    // Fetch user data from API (replace this with your API endpoint)
    // For simplicity, using a sample array of users
    let users = [
        { id: 101, name: 'User 1', email: 'user1@example.com', role:'Admin' },
        { id: 102, name: 'User 2', email: 'user2@example.com', role:'Moderator' },
        { id: 103, name: 'User 3', email: 'user3@example.com', role:'User' },
        { id: 104, name: 'User 4', email: 'user4@example.com', role:'Superuser' },
        { id: 106, name: 'User 5', email: 'user5@example.com', role:'Analyst' },
        { id: 107, name: 'User 6', email: 'user6@example.com', role:'Ambassador' },
        { id: 108, name: 'User 7', email: 'user7@example.com', role:'Advocate' },
        { id: 109, name: 'User 8', email: 'user8@example.com', role:'Representative' },
        { id: 110, name: 'User 9', email: 'user9@example.com', role:'Moderator' },
        { id: 111, name: 'User 10', email: 'user10@example.com', role:'Developer' },
        { id: 112, name: 'User 11', email: 'user11@example.com', role:'Navigator' },
        { id: 113, name: 'User 12', email: 'user12@example.com', role:'Analyst' },
        { id: 114, name: 'User 13', email: 'user13@example.com', role:'Mentor' },
        { id: 115, name: 'User 14', email: 'user14@example.com', role:'Analyst' },
        { id: 116, name: 'User 15', email: 'user15@example.com', role:'Editor' },
        { id: 117, name: 'User 16', email: 'user16@example.com', role:'Navigator' },
        { id: 118, name: 'User 17', email: 'user18@example.com', role:'Representative' },
        { id: 119, name: 'User 18', email: 'user19@example.com', role:'User' },
        { id: 120, name: 'User 19', email: 'user20@example.com', role:'Navigator' },
        { id: 121, name: 'User 20', email: 'user21@example.com', role:'Ambassador' },
        { id: 122, name: 'User 21', email: 'user22@example.com', role:'Planner' },
        { id: 123, name: 'User 22', email: 'user23@example.com', role:'Mentor' },
        { id: 124, name: 'User 23', email: 'user24@example.com', role:'Moderator' },
        { id: 125, name: 'User 24', email: 'user25@example.com', role:'Advocate' },
        { id: 126, name: 'User 25', email: 'user26@example.com', role:'Ambassador' },
        { id: 127, name: 'User 26', email: 'user27@example.com', role:'Editor' },
        { id: 128, name: 'User 27', email: 'user28@example.com', role:'Admin' },
        { id: 129, name: 'User 28', email: 'user29@example.com', role:'Admin' },
        { id: 130, name: 'User 29', email: 'user30@example.com', role:'Analyst' },
        { id: 131, name: 'User 30', email: 'user31@example.com', role:'Admin' },
        { id: 132, name: 'User 31', email: 'user32@example.com', role:'Admin' },
        { id: 133, name: 'User 32', email: 'user34@example.com', role:'Superuser' },
        { id: 134, name: 'User 33', email: 'user35@example.com', role:'Admin' },
        { id: 135, name: 'User 34', email: 'user36@example.com', role:'Admin' },
        { id: 136, name: 'User 35', email: 'user37@example.com', role:'Developer' },
        { id: 137, name: 'User 36', email: 'user38@example.com', role:'Officer' },
        { id: 138, name: 'User 37', email: 'user39@example.com', role:'Representative' },
        { id: 139, name: 'User 38', email: 'user40@example.com', role:'Admin' },
        { id: 140, name: 'User 39', email: 'user41@example.com', role:'Mentor' },
        { id: 141, name: 'User 40', email: 'user42@example.com', role:'Admin' },
        { id: 142, name: 'User 41', email: 'user43@example.com', role:'Admin' },
        { id: 143, name: 'User 42', email: 'user44@example.com', role:'Mentor' },
        { id: 144, name: 'User 43', email: 'user45@example.com', role:'Admin' },
        { id: 145, name: 'User 44', email: 'user46@example.com', role:'User' },
        { id: 146, name: 'User 45', email: 'user47@example.com', role:'Admin' },
        { id: 147, name: 'User 46', email: 'user48@example.com', role:'Planner' },
        { id: 148, name: 'User 47', email: 'user49@example.com', role:'Officer' },
        { id: 149, name: 'User 48', email: 'user50@example.com', role:'Admin' },
        { id: 150, name: 'User 49', email: 'user51@example.com', role:'Admin' },
        { id: 151, name: 'User 50', email: 'user52@example.com', role:'Analyst' },
        { id: 152, name: 'User 51', email: 'user53@example.com', role:'Developer' },
        { id: 153, name: 'User 52', email: 'user54@example.com', role:'Superuser' },
    ];
    
        const perPage = 10;
        let currentPage = 1;
        let selectedRows = [];
    
        const renderTable = () => {
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            const filteredUsers = applySearchFilter(users);
            const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    
            const tableBody = paginatedUsers.map(user => `
                <tr id="row-${user.id}" class="${selectedRows.includes(user.id) ? 'selected' : ''}">
                    <td><input type="checkbox" class="select-row" data-id="${user.id}"></td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td><button class="action-button edit" data-id="${user.id}">Edit</button></td>
                    <td><button class="action-button delete" data-id="${user.id}">Delete</button></td>
                </tr>
            `).join('');
    
            const table = `
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="select-all"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableBody}
                    </tbody>
                </table>
            `;
    
            document.getElementById('app').innerHTML = table;
            renderPagination(filteredUsers.length);
            addEventListeners();
        };
    
        const renderPagination = (totalUsers) => {
            const totalPages = Math.ceil(totalUsers / perPage);
            const paginationButtons = [];
    
            for (let i = 1; i <= totalPages; i++) {
                paginationButtons.push(`<button class="page-button ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`);
            }
    
            const pagination = `
                <div class="pagination">
                    <button class="page-button first-page" data-page="1">First</button>
                    <button class="page-button previous-page" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
                    ${paginationButtons.join('')}
                    <button class="page-button next-page" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
                    <button class="page-button last-page" data-page="${totalPages}">Last</button>
                </div>
            `;
    
            document.getElementById('app').insertAdjacentHTML('beforeend', pagination);
        };
    
        const applySearchFilter = (data) => {
            const searchQuery = document?.getElementById('search')?.value?.toLowerCase();
    
            if (!searchQuery) {
                return data;
            }
    
            return data.filter(user =>
                user.name.toLowerCase().includes(searchQuery) ||
                user.email.toLowerCase().includes(searchQuery)
            );
        };
    
        const addEventListeners = () => {
            // Pagination buttons
            document.querySelectorAll('.page-button').forEach(button => {
                button.addEventListener('click', () => {
                    currentPage = parseInt(button.getAttribute('data-page'));
                    renderTable();
                });
            });
    
            // Select all checkbox
            document.getElementById('select-all').addEventListener('change', () => {
                const selectAllCheckbox = document.getElementById('select-all');
                const selectRowsCheckboxes = document.querySelectorAll('.select-row');
    
                if (selectAllCheckbox.checked) {
                    selectRowsCheckboxes.forEach(checkbox => {
                        checkbox.checked = true;
                        selectedRows.push(parseInt(checkbox.getAttribute('data-id')));
                    });
                } else {
                    selectRowsCheckboxes.forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    selectedRows = [];
                }
            });
    
            // Individual row checkbox
            document.querySelectorAll('.select-row').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const userId = parseInt(checkbox.getAttribute('data-id'));
    
                    if (checkbox.checked) {
                        selectedRows.push(userId);
                    } else {
                        selectedRows = selectedRows.filter(id => id !== userId);
                    }
                });
            });
    
            // Search input
            document?.getElementById('search')?.addEventListener('input', () => {
                currentPage = 1;
                renderTable();
            });
    
            // Edit and Delete buttons
            document.querySelectorAll('.edit').forEach(button => {
                button.addEventListener('click', () => {
                    // Implement edit functionality
                    const userId = parseInt(button.getAttribute('data-id'));
                    console.log('Edit user with ID:', userId);
                });
            });
    
            document.querySelectorAll('.delete').forEach(button => {
                button.addEventListener('click', () => {
                    // Implement delete functionality
                    const userId = parseInt(button.getAttribute('data-id'));
                    selectedRows = selectedRows.filter(id => id !== userId);
                    users = users.filter(user => user.id !== userId);
                    renderTable();
                });
            });
        };
    
        // Initial rendering
        renderTable();
    });
    
