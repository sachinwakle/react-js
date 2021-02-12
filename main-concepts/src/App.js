import "./App.css";
import ClassClick from "./eventhandling/ClassClick";
// import { Counter } from './components/Counter';
// import Greeting from './components/Greeting';
// import Welcome from './components/Welcome';
// import CounterFunction from './components/CounterFunction'
// import RenderList from './components/RenderList';
// import ParentCounter from './components/ParentCounter'
// import Calculator from './statelifting/Calculator';
// import Lists from './lists-and-keys/Lists'
// import FilterableProductTable from './product-table/FilterableProductTable';
// import Counter from './states/Counter';
// import  FunctionClick from "./eventhandling/FunctionClick";
import EventBind from "./eventhandling/EventBind";
import ParentComponent from "./eventhandling/ParentComponent";
import Inline from "./styling/Inline";
import ModuleStyle from "./styling/ModuleStyle";
import Stylesheet from "./styling/Stylesheet";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <CounterFunction/> */}
      {/* <RenderList/> */}
      {/* <ParentCounter/> */}
      {/* <Calculator/> */}
      {/* <Lists/> */}
      {/* <FilterableProductTable/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <Stylesheet />
      <Inline />
      <ModuleStyle />
    </div>
  );
}

export default App;
