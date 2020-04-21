import React, { createContext } from "react";
import { reducer } from "../reducer/counter.reducer";
import { increment, decrement } from "../actions/counter.actions";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const initialState = {
    counter: 0,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { counter } = state;
  const value = {
    counter,
    increment: () => increment(dispatch),
    decrement: () => decrement(dispatch),
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
