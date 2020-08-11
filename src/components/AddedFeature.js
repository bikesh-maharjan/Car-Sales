import React from "react";
import { removeItem } from "../actions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.removeItem(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
