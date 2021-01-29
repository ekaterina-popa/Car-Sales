import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  const totalPrice = props.car.features
    .reduce((acc, value) => {
      return acc + value.price;
    }, props.car.price)
    .toFixed(2);
  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};
export default connect(mapStateToProps)(Total);
