import React, { Component } from "react";
import { inputTypes } from "../constants/constants";
import { currency } from "../constants/constants";
import { invoice } from "../constants/constants";
import { freight } from "../constants/constants";
import { shippingMethods } from "../constants/constants";
import { country } from "../constants/constants";
import { infoArray } from "../constants/constants";

function OrderDetails(props) {
  return (
    <div id="orderDetails">
      <div className="date">
        <span className="divTitle">*order Date</span>
        <br />
        <input
          type={props.dateField}
          onChange={props.info}
          name="date"
          className="field"
          value={props.state.date}
        />
        <div className="error">{props.error.date}</div>
      </div>
      <div className="orderStatus">
        <span className="divTitle">*Order Status</span>
        <br />
        <div className="selectField">
          <select
            className="select"
            onChange={props.info}
            name="status"
            value={props.state.status}
          >
            {props.invoiceDetails.map((item, index) =>
              index === 0 ? (
                <option key={index} value="select" disabled>
                  {item}
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <div className="error">{props.error.status}</div>
        </div>
      </div>
      <div className="orderReference">
        <span className="divTitle">*Customer order Reference</span>
        <br />
        <input
          type={props.textField}
          onChange={props.info}
          name="refNum"
          className="field"
          value={props.state.refNum}
        />
        <div className="error">{props.error.refNum}</div>
      </div>
    </div>
  );
}

function CustomerDetails(props) {
  return (
    <div id="customerDetails">
      <div className="name">
        <span className="divTitle">*Name</span>
        <br />
        <input
          type={props.textField}
          className="field"
          name="name"
          onChange={props.info}
          value={props.state.name}
        />
        <div className="error">{props.error.name}</div>
      </div>
      <div className="description">
        <span className="divTitle">*Description</span>
        <br />
        <input
          type={props.textField}
          onChange={props.info}
          name="discription"
          className="field"
          value={props.state.discription}
        />
        <div className="error">{props.error.discription}</div>
      </div>
    </div>
  );
}

function CurrencyDetails(props) {
  return (
    <div id="currencyDetails">
      <div className="totalAmount">
        <span className="divTitle">*Total Amount</span>
        <br />
        <input
          type={props.textField}
          name="totalAmount"
          onChange={props.info}
          className="field"
          value={props.state.totalAmount}
        />
        <div className="error">{props.error.totalAmount}</div>
      </div>
      <div className="currencyFormat">
        <span className="divTitle">*Currency Format</span>
        <br />
        <div className="selectField">
          <select
            className="select"
            onChange={props.info}
            name="currencyFormat"
            value={props.state.currencyFormat}
          >
            {props.currencyOptions.map((item, index) =>
              index === 0 ? (
                <option key={index} value="select" disabled>
                  {item}
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <div className="error">{props.error.currencyFormat}</div>
        </div>
      </div>
      <div className="freightTerms">
        <span className="divTitle">*FrieghtTerms</span>
        <br />
        <div className="selectField">
          <select
            className="select"
            onChange={props.info}
            name="freight"
            value={props.state.freight}
          >
            {props.freightOptions.map((item, index) =>
              index === 0 ? (
                <option key={index} value="select" disabled>
                  {item}
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <div className="error">{props.error.freight}</div>
        </div>
      </div>
      <div className="shippingMethod">
        <span className="divTitle">*shippingMethod</span>
        <br />
        <div className="selectField">
          <select
            className="select"
            onChange={props.info}
            name="shipping"
            value={props.state.shipping}
          >
            {props.shipMethod.map((item, index) =>
              index === 0 ? (
                <option key={index} disabled value="select">
                  {item}
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <div className="error">{props.error.shipping}</div>
        </div>
      </div>
    </div>
  );
}

function AddressDetails(props) {
  return (
    <div id="addressDetails">
      <span className="divTitle">*AddressDetails</span>
      <input
        type={props.textField}
        onChange={props.info}
        name="addressLine1"
        className="field"
        value={props.state.addressLine1}
      />
      <div className="error">{props.error.addressLine1}</div>
      <input
        type={props.textField}
        onChange={props.info}
        name="addressLine2"
        className="field"
        value={props.state.addressLine2}
      />
      <div className="error">{props.error.addressLine2}</div>
    </div>
  );
}

function LocationDetails(props) {
  return (
    <div id="locationDetails">
      <div className="divTitle">city: </div>
      <div className="city">
        <input
          type={props.textField}
          onChange={props.info}
          name="city"
          className="field"
          value={props.state.city}
        />
        <div className="error">{props.error.city}</div>
      </div>
      <div className="divTitle">State: </div>
      <div className="state">
        <input
          type={props.textField}
          onChange={props.info}
          name="state"
          className="field"
          value={props.state["state"]}
        />
        <div className="error">{props.error.state}</div>
      </div>
      <div className="divTitle">Postal Code: </div>
      <div className="postal">
        <input
          type={props.textField}
          onChange={props.info}
          name="postal"
          className="field"
          value={props.state.postal}
        />
        <div className="error">{props.error.postal}</div>
      </div>
      <div className="divTitle">country/Region: </div>
      <div className="country">
        <div className="selectField">
          <select
            className="select"
            options={props.state.info}
            onChange={props.info}
            name="country"
            value={props.state.country}
          >
            {props.countryField.map((item, index) =>
              index === 0 ? (
                <option key={index} value="select" disabled>
                  {item}
                </option>
              ) : (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
          <div className="error">{props.error.country}</div>
        </div>
      </div>
    </div>
  );
}
class MainComponent extends Component {
  constructor(props) {
    super(props);
    // const user=[];
    this.state = {
      userDetails: {
        date: "",
        status: "select",
        refNum: "",
        name: "",
        discription: "",
        totalAmount: "",
        currencyFormat: "select",
        freight: "select",
        shipping: "select",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postal: "",
        country: "select",
      },
      errors: {},
      isOnSelect: true,
    };
  }
  handleClick = () => {
    this.setValue(null);
  };
  collectInfo = (event) => {
    const { userDetails } = { ...this.state };
    const value = event.target.value;
    const name = event.target.name;
    const info = userDetails;
    info[name] = value;
    this.setState({
      userDetails: info,
    });
  };
  submitUserInfo = (event) => {
    // debugger;
    let formValid = true;
    // const value = event.target.value;
    let errors = {};
    // let fields = this.state.userDetails;//
    const obj = this.state.userDetails;
    Object.keys(obj).map(function (keys) {
      // debugger;
      // console.log(obj[keys].length);
      if (obj[keys].length === 0) {
        formValid = false;
        return (errors[keys] = "*This Field is required");
      }
      return null;
    });
    if (!formValid) {
      this.setState({
        errors: errors,
      });
    } else {
      const userInfo = Object.assign({}, this.state.userDetails);
      infoArray.push(userInfo);
      errors = {};
      this.setState({
        userDetails: {
          date: "",
          status: "select",
          refNum: "",
          name: "",
          discription: "",
          totalAmount: "",
          currencyFormat: "select",
          freight: "select",
          shipping: "select",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          postal: "",
          country: "select",
        },
        errors: errors,
        isOnSelect: false,
      });
      console.log(this.state.userDetails["country"]);
    }
  };
  render() {
    return (
      <div className="components">
        <OrderDetails
          dateField={inputTypes[0]}
          textField={inputTypes[1]}
          invoiceDetails={invoice}
          info={this.collectInfo}
          error={this.state.errors}
          state={this.state.userDetails}
        />
        <CustomerDetails
          textField={inputTypes[1]}
          info={this.collectInfo}
          error={this.state.errors}
          state={this.state.userDetails}
        />
        <CurrencyDetails
          currencyOptions={currency}
          freightOptions={freight}
          shipMethod={shippingMethods}
          info={this.collectInfo}
          error={this.state.errors}
          state={this.state.userDetails}
        />
        <AddressDetails
          textField={inputTypes[1]}
          info={this.collectInfo}
          error={this.state.errors}
          state={this.state.userDetails}
        />
        <LocationDetails
          countryField={country}
          info={this.collectInfo}
          error={this.state.errors}
          state={this.state.userDetails}
          states={this.state}
        />
        <div className="submit">
          <button onClick={this.submitUserInfo.bind(this, this.handleClick)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default MainComponent;
