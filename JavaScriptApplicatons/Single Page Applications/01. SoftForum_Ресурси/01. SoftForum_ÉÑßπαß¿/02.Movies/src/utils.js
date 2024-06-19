const views = [...document.querySelectorAll('.view-section')];

function hideAll() {
  views.forEach(v => v.style.display = 'none');
}
export function showView(section) {
  hideAll();
  section.style.display = 'block';
}

export function spinner() {
  const element = document.createElement('div');
  element.className = 'spinner'; // Assign a class for styling
  element.innerHTML = '<div>Loading...</div>';
  return element;
}