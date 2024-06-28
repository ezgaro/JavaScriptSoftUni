import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { postUsersRegister } from "../Requsts/postUsersRegister.js";

const checkUserStatus = () => {
  const user = localStorage.getItem("user");

  // Hide the login menu item if the user is logged in
  const registerMenuItem = document.querySelector('#register');
  if (registerMenuItem) {
    registerMenuItem.style.display = user ? 'none' : 'block';
  }
  // Return the user status
  return user;
};

const template = () => {
  if (checkUserStatus()) {
    window.location.href = "/"; // or any other page
    return html``; // Return an empty template
  } else {
    return html`
      <form id="register-form">
        <div class="register-page">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>
    `;
  }
};

export const registerPage = () => {
  render(template(), document.querySelector("#root"));

  const form = document.querySelector("#register-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email.length < 3 && password < 1) {
      alert("Invalid email or password");
      throw new Error("Invalid email or password");
    }

    postUsersRegister(email, password)
      .then((data) => {
        const registerToken = data.accessToken;
        if (registerToken) {
          localStorage.setItem("user", registerToken);
          window.location.href = "/";
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Register failed", error);
        throw Error("Invalid email or password");
      });
  });
};
checkUserStatus();
