import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Welcome from './Welcome';
import Navbar from './Navbar';
import Footer from './Footer';
import Info from './Info';
import './style.css';


// Class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React Academy",
      image: "https://media1.tenor.com/images/fe250a86e1dfa2648481e7da5ebd441b/tenor.gif?itemid=5510026"
    }
  }

  // Render life cylcle
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <main className="wrapper">
            <Switch>
              <Redirect exact from="/" to="/welcome" />
              <Route exact path="/card/:id" component={Info} />
              <Route exact path="/welcome"
                render={_ => <Welcome name={this.state.name} image={this.state.image} />} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
