import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import List from './List';
import './style.css';


const url = <a href="https://reactjs.org/docs/hello-world.html">React Documentation</a>;

// Class component
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  // Render life cylcle
  render() {
    const article = {
        list: 
        [ 
          "JSX: In jsx use curly brackets {} to add javascript code, this js will be evaluated and the result will appear on the final HTML.",
          "Destructuring: An object can be also declared with destructuring where you specify what is inside the object."
        ],
        title: 'Sintaxis'
    }

    return (
      <div>
        <Title name={this.state.name} />
        <List title={article.title.toUpperCase()} list={article.list}/>
        <p>
          Based on: {url}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
