import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useAlert } from "react-alert";
import Navigation from "./Navigation";
import { API } from "../API";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/cartAction";

function Checkoutlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();

  async function handleLogin(e) {
    e.preventDefault();
    let prodIds = [];
    if (!email || !password) {
      alert.show("Email and Password are required.", { type: "error" });
    }
    const response = await axios.post(`${API}/signin`, {
      email,
      password,
    });

    if (response.data) {
      localStorage.setItem("token", response.data.token);
      alert.show("Logged In Successfully", { type: "success" });

      const cart = JSON.parse(localStorage.getItem("cartData"));

      cart.map((item) => {
        prodIds.push(...prodIds, item._id);
      });
      localStorage.removeItem("cartData");
      console.log(prodIds);
      prodIds.map((id) => {
        const token = localStorage.getItem("token");
        if (token) {
          return dispatch(addToCart(id));
        }
      });
      setTimeout(() => {
        window.location.href = "/checkout";
      }, 3000);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Header />
      <Navigation />
      <div id="nt_content">
        <div class="kalles-section page_section_heading">
          <div class="page-head tc pr oh cat_bg_img page_head_">
            <div
              class="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0"
              data-bgset="assets/images/shop/collection-list/bg-heading.jpg"
            ></div>
            <div class="container pr z_100">
              <h1 class="mb__5 cw">My Account</h1>
            </div>
          </div>
        </div>

        <div class="container cb">
          <div class="row">
            <div class="col-12 col-md-6 login-form mt__60 mb-0 mb-md-5">
              <div id="CustomerLoginForm" class="kalles-wrap-form">
                <h2>Login</h2>
                <form method="post" action="#">
                  <p class="form-row">
                    <label for="lg-email">
                      Email <span class="required">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="customer[email]"
                      id="lg-email"
                      autocomplete="email"
                    />
                  </p>
                  <p class="form-row">
                    <label for="lg-pw">
                      Password <span class="required">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="customer[password]"
                      id="lg-pw"
                    />
                  </p>
                  <p>
                    <a
                      href="#RecoverPasswordForm"
                      class="btn-change-login-form"
                    >
                      Forgot your password?
                    </a>
                  </p>
                  <input
                    onClick={(e) => handleLogin(e)}
                    type="submit"
                    class="btn js_add_ld"
                    value="Sign In"
                  />
                </form>
              </div>
              <div id="RecoverPasswordForm" class="kalles-wrap-form dn">
                <h2>Reset your password</h2>
                <p>
                  Lost your password? Please enter your email address. You will
                  receive a link to create a new password via email.
                </p>
                <form method="post" action="#">
                  <p class="form-row">
                    <label for="rs-email">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="rs-email"
                      class="input-full"
                    />
                  </p>
                  <input
                    type="submit"
                    class="btn js_add_ld"
                    value="Reset Password"
                  />
                  <a
                    href="#CustomerLoginForm"
                    class="button ml__15 btn-change-login-form"
                  >
                    Cancel
                  </a>
                </form>
              </div>
            </div>
            <div class="col-12 col-md-6 login-form mt__60 mb__60">
              <div id="CustomerRegisterForm">
                <h2>Register</h2>
                <form method="post" action="#">
                  <p class="form-row">
                    <label for="rgs-f_name">First Name</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFisrtName(e.target.value)}
                      type="text"
                      name="customer[first_name]"
                      id="rgs-f_name"
                      autocomplete="given-name"
                    />
                  </p>
                  <p class="form-row">
                    <label for="reg-l_name">Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="customer[last_name]"
                      id="reg-l_name"
                      autocomplete="family-name"
                    />
                  </p>
                  <p class="form-row">
                    <label for="reg-email">
                      Email <span class="required">*</span>
                    </label>
                    <input
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      type="email"
                      name="customer[email]"
                      id="reg-email"
                      autocomplete="email"
                      aria-required="true"
                    />
                  </p>
                  <p class="form-row">
                    <label for="reg-pw">
                      Password <span class="required">*</span>
                    </label>
                    <input
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      type="password"
                      name="customer[password]"
                      id="reg-pw"
                      aria-required="true"
                    />
                  </p>
                  <input
                    onClick={(e) => {
                      handleSignup(e);
                    }}
                    type="submit"
                    value="Register"
                    class="btn js_add_ld"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkoutlogin;
