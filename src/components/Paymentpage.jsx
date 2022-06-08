import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { API } from "../API";
import { useDispatch } from "react-redux";
import { delteUserCart } from "../Actions/cartAction";

function Paymentpage() {
  const history = useHistory();
  const search = useLocation().search;
  const amount = new URLSearchParams(search).get("amount");
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [orderData, setOrderData] = useState("");
  useEffect(() => handlePayment(), []);

  async function handlePayment() {
    const response = await axios.get(`${API}/api/order/${id}`);
    console.log(response.data);
    setOrderData(response.data.order);
    const res = await axios.post(
      `${API}/api/user/payment_gateway/payumoney`,
      {
        txnid: id,
        amount: amount,
        productinfo: "Shopping",
        // firstname: "Nirnay",
        // email: "nirnayrockjain@gmail.com",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setData(res.data);
    // const payment = await axios.patch(`${API}/api/order/update_order/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // if (payment) {
    //   dispatch(delteUserCart());
    //   history.push("/payment-success");
    // }
  }
  return (
    <div>
      <Header />
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20%",
          marginTop: "10%",
        }}
      >
        {data === null && amount === null ? (
          ""
        ) : (
          <form action=" https://test.payu.in/_payment" method="POST">
            <input class="key" type="hidden" name="key" value={data.key} />
            <input class="txnid" type="hidden" name="txnid" value={id} />
            <input class="hash" type="hidden" name="hash" value={data.hash} />
            <input
              type="hidden"
              id="surl"
              value={`${API}/payment-success`}
              name="surl"
            />
            <input
              type="hidden"
              id="furl"
              value={`${API}/payment-failure`}
              name="furl"
            />
            <input class="amount" type="hidden" name="amount" value={amount} />
            <input
              class="con"
              type="hidden"
              name="phone"
              value={orderData.phone}
            />
            <input type="hidden" name="service_provider" value="payu_paisa" />
            <input
              type="hidden"
              class="product"
              name="productinfo"
              value="Shopping"
            />
            <input type="hidden" class="udf1" name="udf1" value={data.userId} />
            <input
              class="firstname"
              type="hidden"
              name="firstname"
              value={data.firstName}
            />
            <input
              class="email"
              type="hidden"
              name="email"
              value={data.email}
            />

            <div className="row">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mr-2"
              >
                Pay
              </Button>

              <a href="/">
                <Button variant="warning" size="lg">
                  Cancel
                </Button>
              </a>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Paymentpage;
