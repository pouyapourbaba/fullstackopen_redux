import React from "react";
import { create } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = props => {
  const handleCreate = async e => {
    e.preventDefault();

    // TODO
    // The use of e.target in async way causes errors

    const newAnecdote = await anecdoteService.createNew(
      e.target.anecdote.value
    );
    props.create(newAnecdote);
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
