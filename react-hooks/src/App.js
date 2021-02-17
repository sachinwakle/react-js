import "./App.css";
import ComponentA from "./context/ComponentA";
import DataFetching from "./effects/DataFetching";
import FetchSinglePost from "./effects/FetchSinglePost";
import HookCounter from "./effects/HookCounter";
import IncorrectDependency from "./effects/IncorrectDependency";
import MouseContainer from "./effects/MouseContainer";
import OnlyOnceEffect from "./effects/OnlyOnceEffect";
import CounterOne from "./reducer/CounterOne";
import FetchingData from "./reducer/FetchingData";
import GlobalState from "./reducer/GlobalState";
import MultipleReducer from "./reducer/MultipleReducer";
import SecondCounter from "./reducer/SecondCounter";
// import HookCounter from './states/HookCounter';
import StateObject from "./states/StateObject";

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <StateObject/> */}
      {/* <HookCounter /> */}
      {/* <OnlyOnceEffect/> */}
      {/* <MouseContainer/> */}
      {/* <IncorrectDependency/> */}
      {/* <DataFetching/> */}
      {/* <FetchSinglePost/> */}
      {/* <ComponentA /> */}
      {/* <CounterOne/> */}
      {/* <SecondCounter/> */}
      {/* <MultipleReducer/> */}
      {/* <GlobalState /> */}
      <FetchingData/>
    </div>
  );
}

export default App;
