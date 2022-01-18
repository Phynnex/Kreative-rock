import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/place-order.module.css";
import HomeStyles from "../assets/css/home.module.css";

const ViewPlaceOrder = () => {
  return (
    <>
      <div className={styles.placeOrderWrapper}>
        <div className="container">
          <div className="row row-cols-1 justify-content-end">
            <div className="col-lg-1 col ps-5">
              <Link className="btn btn-outline-success rounded-pill" to="#">
                Edit
              </Link>
            </div>
            <div className="col-lg-1 col">
              <Link className="btn btn-outline-danger rounded-pill" to="#">
                Delete
              </Link>
            </div>
          </div>

          <br />
          <br />
          <br />

          <form action="">
            <div className="row-cols-1 gy-4 mx-auto">
              <div className="col">
                <label htmlFor="Company Name & Individual Name">
                  Company Name & Individual Name
                </label>
                <input
                  className={`w-100 ${HomeStyles.enquiryInputBox}`}
                  type="text"
                  name="Company Name & Individual Name"
                  placeholder="Company Name"
                />
              </div>

              <div className="col">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                  className={`w-100 ${HomeStyles.enquiryInputBox}`}
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col">
                <label htmlFor="Email Address">Email Address</label>
                <input
                  className={`w-100 ${HomeStyles.enquiryInputBox}`}
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                />
              </div>

              <div className="col">
                <label htmlFor="Country">Country</label>
                <input
                  className={`w-100 ${HomeStyles.enquiryInputBox}`}
                  type="text"
                  name="Country"
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="Description">Description</label>
              <textarea
                placeholder="Typing..."
                name=""
                className={`w-100 ${HomeStyles.enquiryTextarea}`}
              ></textarea>
            </div>

            <div className="mt-4 text-center">
              <input
                className="pri-btn fs-5 ps-5 pe-5"
                type="submit"
                value="PLACE ORDER"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewPlaceOrder;
