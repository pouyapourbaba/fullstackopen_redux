import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteList = props => {
  const handleVote = anecdote => {
    props.vote(anecdote);
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
      {props.visibleAnecdotes.map(anecdote => (
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter !== "") {
    return anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter)
    );
  }
  return anecdotes;
};

const mapStateToProps = state => {
  return {
    visibleAnecdotes: anecdotesToShow(state).sort((a, b) => b.votes - a.votes),
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
