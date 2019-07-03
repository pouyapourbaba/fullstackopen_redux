import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "./../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteList = props => {
  let anecdotes = props.anecdotes.sort((a, b) => b.votes - a.votes);

  const { filter } = props;
  if (filter !== "") {
    anecdotes = anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter)
    );
  }

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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(AnecdoteList);
