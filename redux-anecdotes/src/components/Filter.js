import React from "react";
import { setFilter } from "../reducers/filterReducer";
import { connect } from "react-redux";

const Filter = props => {
  const handleChange = e => {
    props.store.dispatch(setFilter(e.target.value.toLowerCase()));
  };

  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect()(Filter);
