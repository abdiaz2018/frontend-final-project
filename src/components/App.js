import React, { Component } from "react";
import Header from "./Header";
import '../App.css'
import Island from "./Island";
import IslandForm from "./IslandForm";
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom"



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/islands">
              <Header />
              <Island />
            </Route>
            <Route path="/islands/new">
              <Header />
              <IslandForm />
            </Route> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
