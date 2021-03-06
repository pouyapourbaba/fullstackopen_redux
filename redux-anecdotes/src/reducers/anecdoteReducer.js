// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
// ];
import anecdoteService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const votedAnecdote = action.payload;
      return state.map(a => (a.id !== votedAnecdote.id ? a : votedAnecdote));
    case "CREATE":
      // const newAnecdote = asObject(action.payload);
      return [...state, action.payload];
    case "INIT_ANECDOTES":
      return action.payload;
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      payload: anecdotes
    });
  };
};

export const vote = anecdote => {
  return async dispatch => {
    const voted = { ...anecdote, votes: anecdote.votes + 1 };
    const response = await anecdoteService.vote(voted);
    dispatch({ type: "VOTE", payload: response });
  };
};

export const create = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({
      type: "CREATE",
      payload: newAnecdote
    });
  };
};

export default anecdoteReducer;
