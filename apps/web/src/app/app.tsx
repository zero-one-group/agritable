import { WebLandingPage } from '@agritable/web/landing-page';
import { ChakraProvider } from '@chakra-ui/react';
import { WebDashboard } from '@agritable/web/dashboard';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

export function App() {
  return (
    <Router>
      <ChakraProvider>
        <Switch>
          <Route exact path="/dashboard">
            <Redirect to="/dashboard/home" />
          </Route>
          <Route path="/dashboard/:menu" component={WebDashboard} />
          <Route path="/" component={WebLandingPage} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
