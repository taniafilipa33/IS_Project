import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./style/App.css";
import history from './history'

import Compositions from "./views/Compositions";
import Versioned from "./views/Versioned";
import Landing from "./views/Landing.js";
import Composition from "./views/Composition";
import AddVersion from "./views/AddVersion";
import AddComposition from "./views/AddComposition";

function App() {
  return (
  <Router history = {history} forceRefresh={true}>
    <Route>
      <Switch>
      {
          <Route
            path="/ehr/:id/versioned/add"
            render={(props) => <AddVersion {...props} />}
          ></Route>
        }
        {
          <Route
            path="/ehr/:id/versioned/:idV/composition/add"
            render={(props) => <AddComposition {...props} />}
          ></Route>
        }
        {
          <Route
            path="/ehr/:id/versioned/:idV/composition/:ve"
            render={(props) => <Composition {...props} />}
          ></Route>
        }
        
        {
          <Route
            path="/ehr/:id/versioned/:idV/composition"
            render={(props) => <Compositions {...props} />}
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
    </Route>
  </Router>
  );
}

export default App;
