import React, { useState } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import Recoverpassword from "./Recoverpassword";
import Signup from "./Signup";
import { API } from "../API";

function Login() {
  const [loginSelect, setloginSelect] = useState(true);
  const [signupSelect, setsignupSelect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  function showRegistration() {
    setloginSelect(false);
    setsignupSelect(true);
  }

  async function handleLogin(e) {
    setLoading(true);
    e.preventDefault();

    if (!email || !password) {
      alert.show("Email and Password are required.", { type: "error" });
    }
    const response = await axios.post(`${API}/signin`, {
      email,
      password,
    });
    console.log(response.data);
    if (response.data) {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      alert.show("Logged In Successfully", { type: "success" });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
      setTimeout(() => {
        window.stop();
      }, 4000);
    }
  }

  return (
    <div>
      <form
        id="customer_login"
        class={`nt_mini_cart flex column h__100 ${
          loginSelect ? "is_selected" : ""
        }`}
      >
        <div class="mini_cart_header flex fl_between al_center">
          <div class="h3 widget-title tu fs__16 mg__0">Login</div>
          <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
        </div>
        <div class="mini_cart_wrap">
          <div class="mini_cart_content fixcl-scroll">
            <div class="fixcl-scroll-content">
              <p class="form-row">
                <label for="CustomerEmail">
                  Email <span class="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="CustomerEmail"
                  autocomplete="email"
                  autocapitalize="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p class="form-row">
                <label for="CustomerPassword">
                  Password <span class="required">*</span>
                </label>
                <input
                  type="password"
                  value=""
                  name="password"
                  autocomplete="current-password"
                  id="CustomerPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <input
                type="submit"
                class="button button_primary w__100 tu js_add_ld"
                value={loading ? "Logging In ..." : "Log In"}
                onClick={(e) => handleLogin(e)}
              />
              <br />
              <p class="mb__10 mt__20">
                New customer?
                <a
                  href="#"
                  data-id="#RegisterForm"
                  class="link_acc"
                  onClick={showRegistration}
                >
                  Create your account
                </a>
              </p>
              <p>
                Lost password?
                <a href="#" data-id="#RecoverForm" class="link_acc">
                  Recover password
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
      <Recoverpassword />
      <Signup show={signupSelect} />
    </div>
  );
}

export default Login;
