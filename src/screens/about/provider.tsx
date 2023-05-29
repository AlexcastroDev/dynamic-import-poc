import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

export const counterContext = createContext({} as any);

const StateProvider = ({ children }: React.PropsWithChildren) => {
  const [count, setCount] = React.useState(({ count1: 0, count2: 0 }))

 return(
   <counterContext.Provider value={{count, setCount }}>
      {children}
    </counterContext.Provider>
     )
};

export default StateProvider

export const incrementSelector = () => useContextSelector(counterContext, (state) => ({
  updateCount1: state.updateCount1,
  updateCount2: state.updateCount2
}))

export const useCount1Selector = () => useContextSelector(counterContext, (state) => state.count.count1)
export const useCount2Selector = () => useContextSelector(counterContext, (state) => state.count.count2)