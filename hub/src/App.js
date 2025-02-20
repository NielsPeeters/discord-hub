import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNav from "./Nav";
import Hubs from "./pages/Hubs";
import GlobalToast from "./pages/components/GlobalToast";

import "./scss/App.scss";

function App() {
  return (
    <Router>
      <GlobalToast />
      <AppNav />
      <Container>
        <Switch>
          <Route path="/">
            <Hubs />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
