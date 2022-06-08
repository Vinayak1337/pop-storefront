import React from "react";

function Recoverpassword() {
  return (
    <div>
      <form id="RecoverForm" class="nt_mini_cart flex column h__100">
        <div class="mini_cart_header flex fl_between al_center">
          <div class="h3 widget-title tu fs__16 mg__0">Recover password</div>
          <i class="close_pp pegk pe-7s-close ts__03 cd"></i>
        </div>
        <div class="mini_cart_wrap">
          <div class="mini_cart_content fixcl-scroll">
            <div class="fixcl-scroll-content">
              <p class="form-row">
                <label for="RecoverEmail">Email address</label>
                <input
                  type="email"
                  value=""
                  name="email"
                  id="RecoverEmail"
                  class="input-full"
                  autocomplete="email"
                  autocapitalize="off"
                />
              </p>
              <input
                type="submit"
                class="button button_primary w__100 tu js_add_ld"
                value="Reset Password"
              />
              <br />
              <p class="mb__10 mt__20">
                Remembered your password?
                <a href="#" data-id="#customer_login" class="link_acc">
                  Back to login
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Recoverpassword;
