import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import AppStyle from "./App.module.css";

function App() {
    return <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default App;