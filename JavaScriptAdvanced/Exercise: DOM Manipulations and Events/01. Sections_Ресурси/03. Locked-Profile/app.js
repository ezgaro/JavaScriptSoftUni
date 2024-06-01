function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));

    function onClick(e) {
        let profile = e.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        if(isActive) {
            let hiddenFiles = Array.from(profile.querySelectorAll('div'))
            .find(p => p.id.includes('HiddenFields'));
            if(e.target.textContent === "Show more"){
                e.target.textContent = "Hide it";
                hiddenFiles.style.display = "block";
            } else {
                e.target.textContent = "Show more";
                hiddenFiles.style.display = "none";
            }

        }
    }

}