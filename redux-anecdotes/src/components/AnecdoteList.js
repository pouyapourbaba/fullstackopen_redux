import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";
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
    props.vote(anecdote.id);
    const notification = {
      message: `you voted '${anecdote.content}'`,
      type: "success"
    };
    props.setNotification(notification);

    setTimeout(() => {
      props.removeNotification();
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

const mapDispatchToProps = {
  vote,
  setNotification,
  removeNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
