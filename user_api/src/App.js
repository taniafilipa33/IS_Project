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
          <Route
            path="/ehr/:id/versioned"
            render={(props) => <ListVersioned {...props} />}
          ></Route>
        }
        {
          <Route
            path="/ehr/:id/composition"
            render={(props) => <ListComposition {...props} />}
          ></Route>
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
