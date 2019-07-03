// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
// ];

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
      const id = action.payload;
      const anecdote = state.find(n => n.id === id);
      const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      return state.map(a => (a.id !== id ? a : votedAnecdote));
    case "CREATE":
      const newAnecdote = asObject(action.payload);
      return [...state, newAnecdote];
    case "INIT_ANECDOTES":
      return action.payload;
    default:
      return state;
  }
};

export const initializeAnecdotes = anecdotes => {
  return {
    type: "INIT_ANECDOTES",
    payload: anecdotes
  };
};

export const vote = id => {
  return {
    type: "VOTE",
    payload: id
  };
};

export const create = anecdote => {
  return {
    type: "CREATE",
    payload: anecdote
  };
};

export default anecdoteReducer;
