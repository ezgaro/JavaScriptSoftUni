function notify(message) {
  let divNotification = document.querySelector('#notification');
  let pNotificationElement = document.createElement('p');
  pNotificationElement.textContent = message;
  divNotification.append(pNotificationElement);
  divNotification.style.display = 'block';

  divNotification.addEventListener('click', () => {
    divNotification.style.display = 'none';
  });
}