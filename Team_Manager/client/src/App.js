import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import List from './components/List';
import AddPlayer from './components/AddPlayer';
import Games from './components/Games';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <List />
          </Route>
          <Route  path="/new">
            <AddPlayer />
          </Route>
          <Route  path="/games/:game_no">
            <Games />
          </Route>
          <Route  path="/update/:author_id">
            {/* <UpdateAuthor /> */}
          </Route>
        </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
