import React, { Component } from "react";
import { inputTypes } from "../constants/constants";
import { currency } from "../constants/constants";
import { invoice } from "../constants/constants";
import { freight } from "../constants/constants";
import { shippingMethods } from "../constants/constants";
import { country } from "../constants/constants";

function SelectField(props) {
  return (
    <select className="select">
      {props.invoiceDetails.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
}

function TextField(props) {
  return <input type={props.type} className="field" />;
}

function OrderDetails(props) {
  console.log(props.dateField);
  return (
    <div id="orderDetails">
      <div className="date">
        <span className="divTitle">*order Date</span>
        <br />
        <TextField type={props.dateField} />
      </div>
      <div className="orderStatus">
        <span className="divTitle">*Order Status</span>
        <br />
        <div className="selectField">
          <SelectField invoiceDetails={props.invoiceDetails} />
        </div>
      </div>
      <div className="orderReference">
        <span className="divTitle">*Customer order Reference</span>
        <br />
        <TextField type={props.textField} />
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
        <TextField type={props.textField} />
      </div>
      <div className="discription">
        <span className="divTitle">*Description</span>
        <br />
        <TextField type={props.textField} />
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
        <TextField type={props.textField} />
      </div>
      <div className="currencyFormat">
        <span className="divTitle">*Currency Format</span>
        <br />
        <div className="selectField">
          <SelectField invoiceDetails={props.currencyOptions} />
        </div>
      </div>
      <div className="freightTerms">
        <span className="divTitle">*FrieghtTerms</span>
        <br />
        <div className="selectField">
          <SelectField invoiceDetails={props.freightOptions} />
        </div>
      </div>
      <div className="shippingMethod">
        <span className="divTitle">*shippingMethod</span>
        <br />
        <div className="selectField">
          <SelectField invoiceDetails={props.shipMethod} />
        </div>
      </div>
    </div>
  );
}

function AddressDetails(props) {
  return (
    <div id="addressDetails">
      <span className="divTitle">*AddressDetails</span>
      <TextField type={props.textField} />
      <TextField type={props.textField} />
    </div>
  );
}

function LocationDetails(props) {
  return (
    <div id="locationDetails">
      <div className="divTitle">city: </div>
      <div className="city">
        <TextField type={props.textField} />
      </div>
      <div className="divTitle">State: </div>
      <div className="state">
        <TextField type={props.textField} />
      </div>
      <div className="divTitle">Postal Code: </div>
      <div className="postal">
        <TextField type={props.textField} />
      </div>
      <div className="divTitle">country/Region: </div>
      <div className="country">
        <div className="selectField">
          <SelectField invoiceDetails={props.countryField} />
        </div>
      </div>
    </div>
  );
}

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="components">
        <OrderDetails
          dateField={inputTypes[0]}
          textField={inputTypes[1]}
          invoiceDetails={invoice}
        />
        <CustomerDetails textField={inputTypes[1]} />
        <CurrencyDetails
          currencyOptions={currency}
          freightOptions={freight}
          shipMethod={shippingMethods}
        />
        <AddressDetails textField={inputTypes[1]} />
        <LocationDetails countryField={country} />
      </div>
    );
  }
}

export default MainComponent;
