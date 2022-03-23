import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Views/Main';
import Movies from './Views/Movies/Movies';
import Header from './components/Header';
import Directors from './Views/Directors/Directors';
import Countries from './Views/Countries/Countries';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/directors">
            <Directors />
          </Route>
          <Route path="/countries">
            <Countries />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
