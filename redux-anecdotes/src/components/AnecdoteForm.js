import React from "react";
import { create } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";

const AnecdoteForm = props => {
  const handleCreate = e => {
    e.preventDefault();
    props.create(e.target.anecdote.value);
    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  create
};

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm);
