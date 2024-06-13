function lockedProfile() {
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(([id, profileData], index) => {
                const profileDiv = createProfileCard(profileData, index + 1);
                document.getElementById('main').appendChild(profileDiv);
            });
        });

    function createProfileCard(userData, index) {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index}Username" value="${userData.username}" disabled readonly />
            <div id="user${index}HiddenFields" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${index}Email" value="${userData.email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${index}Age" value="${userData.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        const button = profileDiv.querySelector('button');
        button.addEventListener('click', () => toggleVisibility(profileDiv, index));

        return profileDiv;
    }

    function toggleVisibility(profileDiv, index) {
        const moreInfoDiv = profileDiv.querySelector(`#user${index}HiddenFields`);
        const lockStatus = profileDiv.querySelector(`input[name="user${index}Locked"][value="lock"]`).checked;
        const button = profileDiv.querySelector('button');

        if (!lockStatus) {
            if (button.textContent === 'Show more') {
                moreInfoDiv.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                moreInfoDiv.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}