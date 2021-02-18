import "./App.css";
import ParentComponent from "./callbacks/ParentComponent";
import ComponentA from "./context/ComponentA";
import DocTitleOne from "./custom-hooks/DocTitleOne";
import DocTitleTwo from "./custom-hooks/DocTitleTwo";
import DataFetching from "./effects/DataFetching";
import FetchSinglePost from "./effects/FetchSinglePost";
import HookCounter from "./effects/HookCounter";
import IncorrectDependency from "./effects/IncorrectDependency";
import MouseContainer from "./effects/MouseContainer";
import OnlyOnceEffect from "./effects/OnlyOnceEffect";
import Counter from "./memo/Counter";
// import CounterOne from "./reducer/CounterOne";
import FetchingData from "./reducer/FetchingData";
import GlobalState from "./reducer/GlobalState";
import MultipleReducer from "./reducer/MultipleReducer";
import SecondCounter from "./reducer/SecondCounter";
import ClassTimer from "./reference/ClassTimer";
import FocusInput from "./reference/FocusInput";
import HookTimer from "./reference/HookTimer";
// import HookCounter from './states/HookCounter';
import StateObject from "./states/StateObject";
import CounterOne from "./custom-hooks/CounterOne";
import CounterTwo from "./custom-hooks/CounterTwo";
import UserForm from "./custom-hooks/UserForm";

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
      {/* <FetchingData/> */}
      {/* <ParentComponent/> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/> */}
      {/* <HookTimer/> */}
      {/* <DocTitleOne/> */}
      {/* <DocTitleTwo/> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo/> */}
      <UserForm/>
    </div>
  );
}

export default App;
