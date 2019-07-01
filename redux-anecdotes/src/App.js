import React from "react";
import { vote, create } from "./reducers/anecdoteReducer";

const App = props => {
  const anecdotes = props.store.getState();

  const handleVote = id => {
    props.store.dispatch(vote(id));
  };

  const handleCreate = e => {
    e.preventDefault();
    props.store.dispatch(create(e.target.anecdote.value));
    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
