import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/carActions";

const AddedFeature = (props) => {
  const handleClick = () => {
    props.removeFeature(props.feature.id);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = {
  removeFeature,
};
export default connect(undefined, mapDispatchToProps)(AddedFeature);
