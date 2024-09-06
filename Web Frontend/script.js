document.addEventListener('DOMContentLoaded', function() {
    const findExperts = document.getElementById('find-experts');
    const addProfile = document.getElementById('add-profile');
    const updateProfile = document.getElementById('update-profile');
    const generatePanel = document.getElementById('generate-panel');
    const contentArea = document.getElementById('content-area');
    const logoutButton = document.getElementById('logout');

    function loadContent(title, description) {
        contentArea.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
    }

    findExperts.addEventListener('click', function() {
        loadContent("Find Experts", "This section allows you to find and filter experts based on various criteria.");
    });

    addProfile.addEventListener('click', function() {
        loadContent("Add Profile", "This section lets you add new expert profiles.");
    });

    updateProfile.addEventListener('click', function() {
        loadContent("Update Profile", "This section lets you update existing expert profiles.");
    });

    generatePanel.addEventListener('click', function() {
        loadContent("Generate Panel", "This section helps you to generate interview panels based on the selected criteria.");
    });

    logoutButton.addEventListener('click', function() {
        window.location.href = '/';
    });
});
