import Context from './Context';
import useGlobalState from './Global-State';

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>
      {children}
    </Context.Provider>
  );
};

export default GlobalStateProvider;