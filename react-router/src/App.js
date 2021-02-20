import "./App.css";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => <h1 style={{ color: "crimson", minHeight: "9vh" }}>Home Page</h1>;
export default App;
