import React, {useReducer} from "react";
import "./App.css";
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";


// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
// export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // const [count, dispatch]= useReducer(reducer, initialState);
  return (
    <DataFetchingTwo/>
    // <DataFetchingOne/>
    // <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    //   <div className="App">
    //   Count - {count} 
    //   <ComponentA/>
    //   <ComponentB/>
    //   <ComponentC/>
    //   </div>
    // </CountContext.Provider>

  )
}

export default App;

      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={"arya"}>
        <ChannelContext.Provider value={'bootcamp'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
