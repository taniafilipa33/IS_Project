import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./style/App.css";
import Searcher from "./components/searcher";
import ListVersioned from "./components/listV";
import ListComposition from "./components/listC";

import Landing from "./views/Landing.js";

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
              <Landing />
            </div>
          </Route>
        }
        {/* add redirect for first page */}
        <Redirect from="/" to="/ehr" />
      </Switch>
    </Router>
  );
}

export default App;
