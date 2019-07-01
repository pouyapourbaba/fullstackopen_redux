import React from "react";
import { create } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const handleCreate = e => {
    e.preventDefault();
    props.store.dispatch(create(e.target.anecdote.value));
    e.target.anecdote.value = "";
  };

  return (
    <form onSubmit={handleCreate}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
