import './styles/App.css';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Navbar from "./components/Navbar"
import Body from './components/Body';
import Createlist from "./components/Createlist";
import Item from "./components/Item";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/item/:itemid/update">
              <Update />
          </Route>
        <Route path="/item/:itemid">
              <Item />
          </Route>
          <Route path="/createlist">
              <Createlist/>
          </Route>
          <Route path="/">
              <Body/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
