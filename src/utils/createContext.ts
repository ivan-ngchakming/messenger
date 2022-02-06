import React from 'react';

const createContext = <T>() => {
  const Context = React.createContext<T | undefined>(undefined);
  const useContext = () => {
    const ctx = React.useContext(Context);
    if (!ctx) throw new Error('useContext must be inside a provider!');
    return ctx;
  }
  return [useContext, Context] as const;
}

export default createContext;
