import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import Card from './Card';
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
        title: 'Prop Propagation',
        list: 
        [ 
          "Child: Props",
          "Parent: Emit Event"
        ],
        img: 'https://static.imasters.com.br/wp-content/uploads/2017/06/4-1.png'
    }

    return (
      <main className="wrapper">
        <Title name={this.state.name} />
        <Card title={article.title.toUpperCase()} list={article.list} img={article.img}/>
        <p>
          Based on: {url}
        </p>
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
