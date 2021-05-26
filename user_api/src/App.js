import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.css";
import Searcher from "./components/searcher";
import ListVersioned from "./components/listV";
import ListComposition from "./components/listC";

function App() {
  return (
    <Router>
      <Switch>
        {
          <Route path="/ehr/:idEhr/versioned">
            <div className="App">
              <ListVersioned />
            </div>
          </Route>
        }
        {
          <Route path="/ehr/:idEhr/composition">
            <div className="App">
              <ListComposition />
            </div>
          </Route>
        }
        {
          <Route path="/ehr">
            <div className="App">
              <Searcher />
            </div>
          </Route>
        }
      </Switch>
    </Router>
  );
}

export default App;
