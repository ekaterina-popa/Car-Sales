import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/carActions";

const AdditionalFeature = (props) => {
  const handleClick = () => {
    props.addFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = undefined;
const mapDispatchToProps = {
  addFeature,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
