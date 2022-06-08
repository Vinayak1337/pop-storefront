import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { API } from "../API";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [message, setMessage] = useState("");
  const alert = useAlert();
  const token = localStorage.getItem("token");

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phoneNo||
      !message
    ) {
      alert.show("please fill all the fields", { type: "error" });
    }
    else
    {
    let response = await axios.post(
      `${API}/api/contact/add_Contact`,
      {
        name,
        email,
        phoneNo,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.message) {
      alert.show("Thanks for reaching us.We will get back to you at the earliest.", { type: "success" });
      setName("");
      setEmail("");
      setphoneNo("");
      setMessage("");
    }
  }
  }
  return (
    <div>
      <div id="nt_content">
        <div class="kalles-section page_section_heading">
          <div class="page-head tc pr oh cat_bg_img page_head_">
            <div
              class="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0"
              data-bgset="assets/images/shop/shop-banner.jpg"
            ></div>
            <div class="container pr z_100">
              <h1 class="mb__5 cw">Contact Us</h1>
              <p class="mg__0">
                Follow your passion, and success will follow you
              </p>
            </div>
          </div>
        </div>

        <div class="kalles-section container mb__50 cb">
          <div class="row fl_center">
            <div class="contact-form col-12 col-md-6 order-1 order-md-0">
              <form method="post" action="#" class="contact-form">
                <h3 class="mb__20 mt__40">DROP US A LINE</h3>
                <p>
                  <label for="ct-name">Your Name (required)</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="required"
                    type="text"
                    id="ct-name"
                    name="ct-name"
                  />
                </p>
                <p>
                  <label for="ct-email">Your Email (required)</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                    type="email"
                    id="ct-email"
                    name="ct-email"
                  />
                </p>
                <p>
                  <label for="ct-phone">Your Phone Number</label>
                  <input
                    value={phoneNo}
                    onChange={(e) => setphoneNo(e.target.value)}
                    type="tel"
                    id="ct-phone"
                    name="ct-phone"
                    pattern="[0-9\-]*"
                  />
                </p>
                <p>
                  <label for="ct-message">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="20"
                    id="ct-message"
                    name="ct-message"
                    required="required"
                  ></textarea>
                </p>
                <input
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  class="button w__100"
                  value="Send"
                />
              </form>
            </div>
            <div class="contact-content col-12 col-md-6 order-0 order-md-1">
              <h3 class="mb__20 mt__40">CONTACT INFORMATION</h3>
              <p>
                We love to hear from you on our customer service, merchandise,
                website or any topics you want to share with us. Your comments
                and suggestions will be appreciated. Please complete the form
                below.
              </p>
              <p class="mb__5 d-flex">
                <i class="las la-home fs__20 mr__10 text-primary"></i> Flora
                Corporation Limited, 3rd Floor, Surya Towers, Secunderabad,
                Hyderabad
              </p>
              <p class="mb__5 d-flex">
                <i class="las la-phone fs__20 mr__10 text-primary"></i> +91 123
                456 7890
              </p>
              <p class="mb__5 d-flex">
                <i class="las la-envelope fs__20 mr__10 text-primary"></i>{" "}
                <a
                  href="#"
                  class="__cf_email__"
                  data-cfemail="d6b5b9b8a2b7b5a296b5b9bba6b7b8aff8b5b9bb"
                >
                  [email&#160;protected]
                </a>
              </p>
              <p class="mb__5 d-flex">
                <i class="las la-clock fs__20 mr__10 text-primary"></i> Everyday
                9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
