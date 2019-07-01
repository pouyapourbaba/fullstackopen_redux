import React from "react";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = props => {
  const anecdotes = props.store.getState().sort((a, b) => b.votes - a.votes);

  const handleVote = id => {
    props.store.dispatch(vote(id));
  };
  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
