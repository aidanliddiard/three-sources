import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Views/Main';
import Movies from './Views/Movies/Movies';
import Header from './components/Header';

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
