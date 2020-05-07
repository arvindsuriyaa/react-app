import React, { Component } from "react";
import { infoArray } from "../constants/constants";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>S.No</th>
        <th>Order Date</th>
        <th>Order Status</th>
        <th>Reference Number</th>
        <th>Name</th>
        <th>City</th>
        <th>State</th>
        <th>Postal Code</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.userData.map((row, index) => {
    console.log("row", row);
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.date}</td>
        <td>{row.status}</td>
        <td>{row.refNum}</td>
        <td>{row.name}</td>
        <td>{row.city}</td>
        <td>{row.state}</td>
        <td>{row.postal}</td>
        <td>
          <button onClick={() => props.removeData(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const TableFormation = (props) => {
  if (props.userData.length === 0) {
    return <h1>NO DATA FOUND. ENTER FORM.</h1>
  } else {
    const { userData, removeData } = props;
    return (
      <table cellSpacing="0" cellPadding="0">
        <TableHeader />
        <TableBody
          userData={userData}
          removeData={removeData}
        />
      </table>
    );
  }
};

class Table extends Component {
  state = {
    user: infoArray,
  };
  removeData = (index) => {
    const { user } = this.state;

    this.setState({
      user: user.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    console.log("infoArray", infoArray);
    return (
      <div id="salesOrderTable">
        <h1>Sales Order</h1>
        <TableFormation
          userData={this.state.user}
          removeData={this.removeData}
        />
      </div>
    );
  }
}

export default Table;
