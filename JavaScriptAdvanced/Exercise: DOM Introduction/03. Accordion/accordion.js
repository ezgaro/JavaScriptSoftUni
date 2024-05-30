let isVisible;
function toggle() {
    if(isVisible) {
        document.getElementById('extra').style.display = 'none';
        isVisible = false;
    } else {
        document.getElementById('extra').style.display = 'block';
        isVisible = true;
    }
}