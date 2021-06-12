import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./style/App.css";

import Composition from "./views/Compositions";
import Versioned from "./views/Versioned";
import Landing from "./views/Landing.js";


function App() {
  return (
    <Router>
      <Switch>
        {
          <Route
            path="/ehr/:id/versioned/:idV/composition"
            render={(props) => <Composition {...props} />}
          ></Route>
        }
        {
          <Route
            path="/ehr/:id/versioned"
            render={(props) => <Versioned {...props} />}
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
