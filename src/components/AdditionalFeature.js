import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.addItem(props.feature);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addItem })(AdditionalFeature);
