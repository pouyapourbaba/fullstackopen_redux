import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "./../reducers/notificationReducer";

const AnecdoteList = props => {
  const anecdotes = props.store
    .getState()
    .anecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = anecdote => {
    props.store.dispatch(vote(anecdote.id));
    const notification = {
      message: `you voted '${anecdote.content}'`,
      type: "success"
    };
    props.store.dispatch(setNotification(notification));

    setTimeout(() => {
      props.store.dispatch(removeNotification());
    }, 5000);
  };
  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
