export const checkUserStatus = (id) => {
  const user = localStorage.getItem("user");

  // Hide the login menu item if the user is logged in
  const menuItem = document.querySelector(`#${id}`);
  if (menuItem) {
    menuItem.style.display = user ? 'none' : 'block';
  }
  // Return the user status
  return user;
};

export const displayLogout = () => {
  const user = localStorage.getItem("user");
  const menuItem = document.querySelector('#logout');
  if (menuItem) {
    menuItem.style.display = user ? "block" : "none";
  }
};