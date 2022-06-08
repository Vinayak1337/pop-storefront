import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { API } from "../API";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
function Popup(props) {
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getAddress() {
      const response = await axios.get(
        `${API}/api/address/view_Address/${props.edit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setName(response.data.Address.name);
      setAddress(response.data.Address.address);
      setPin(response.data.Address.pin);
      setCountry(response.data.Address.country);
      setPhoneNo(response.data.Address.phoneNo);
      setState(response.data.Address.state);
    }
    getAddress();
  }, []);

  async function saveAddress() {
    setLoading(true);

    if (props.edit) {
      const response = await axios.patch(
        `${API}/api/address/update_Address/${props.edit}`,
        {
          phoneNo,
          name,
          address,
          state,
          country,
          pin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.data.data) {
        setLoading(false);
        window.location.reload();
      } else {
        setLoading(false);
      }
    } else {
      const response = await axios.post(
        `${API}/api/address/add_Address`,
        {
          phoneNo,
          name,
          address,
          state,
          country,
          pin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.data) {
        setLoading(false);
        window.location.reload();
      } else {
        setLoading(false);
      }
    }
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            ADD ADDRESS FOR DELIVERY
          </Modal.Title>
        </Modal.Header>
        {props.modelfor === "address" ? (
          <>
            <Modal.Body>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3"
                type="text"
                placeholder="Enter Your Name"
              />
              <div className="row">
                <div className="col-6">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="col-6">
                  <input
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Pin Code"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div className="col-6">
                  <RegionDropdown
                    country={country}
                    value={state}
                    onChange={(val) => setState(val)}
                  />
                </div>
              </div>
              <input
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="mt-3"
                type="text"
                placeholder="Enter Phone Number"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={saveAddress}>
                {loading ? "Loading..." : "Save"}
              </Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Popup;
