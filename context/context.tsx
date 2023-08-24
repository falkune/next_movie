// /contexts/GlobalStateContext.js

import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext({});

// const GlobalStateContext = createContext({
//   globalState: {},
//   setGlobalState: () => { }
// });

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }: any) {
  const [globalState, setGlobalState] = useState({
    // Initialisez votre état global ici si nécessaire
    // Par exemple : key1: initialValue1, key2: initialValue2, ...
  });

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
