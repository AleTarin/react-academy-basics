import React, { Component } from 'react';
import Navbar from './NavbarDisplay';
// Class component
class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Home', 'Info']
    }
  }
  
  render() {
    return (
      <Navbar tags={this.state.tags}/>
    );
  }
}

export default NavbarContainer;
