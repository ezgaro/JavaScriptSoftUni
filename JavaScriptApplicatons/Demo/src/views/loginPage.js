import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { postUsersLogin } from "../Requsts/postUsersLogin.js";
import { checkUserStatus } from "../util.js";


const template = () => {
  if (checkUserStatus('login')) {
    window.location.href = "/"; // or any other page
    return html``; // Return an empty template
  } else {
    return html`
      <form id="login-form">
        <div class="login-page">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
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
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </div>
      </form>
    `;
  }
};

export const loginPage = () => {
  render(template(), document.querySelector("#root"));

  const form = document.querySelector("#login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      postUsersLogin(email, password)
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("user", data.accessToken);
            window.location.href = "/";
          } else {
            alert("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error("Login failed", error);
          alert("Incorrect username or password input");
        });
    });
  }
};
checkUserStatus('login');
