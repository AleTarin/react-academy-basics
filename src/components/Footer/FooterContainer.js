import React, { Component } from 'react';
import Footer from './FooterDisplay';

const url = <a href="https://reactjs.org/docs/hello-world.html">React Documentation</a>;

class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: 'mailto:a.de.la.cruz@accenture.com',
      name: 'Alejandro De la Cruz Tarin'
    }
  }

  render() {
    return (
      <Footer mail={this.state.mail} name={this.state.name}> {url} </Footer>
    );
  }
}

export default FooterContainer;
