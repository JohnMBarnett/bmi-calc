import logo from './logo.svg';
import './App.css';
import MainPage from './homepage';
import { Route, Switch, Link } from "react-router-dom";
import MetricForm from './components/metric';
import ImperialForm from './components/imperial';

function App() {
  <div>
  
  </div>
  return (
    <div>
      <Switch>
        <Route path='/metric'>
          <MetricForm />
        </Route>

        <Route path='/imperial'>
            <ImperialForm />
        </Route>

        <Route exact path="/">
            <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
