import React, { Component } from 'react';
import Info from './InfoDisplay';
import { articles } from '../../mock';

// Class component
class InfoContainer extends Component {
  //=== BEGINS Life cycle hooks
  constructor() {
    super();
    this.state = {
      currentArticle: {
        title: null,
        img: null,
        list: [],
        src: null
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setArticle();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match)
      this.setArticle();
  }

  render() {
    return <Info article={this.state.currentArticle} handler={this.handleClick} />;
  }

  componentWillUnmount() {

  }
  //=== ENDS life cycle hooks

  //=== BEGIN Helper functions
  findArticle = _ => {
    const current = articles.find(article => article.id === this.props.match.params.id);
    return current;
  }

  setArticle = _ => {
    this.setState(_ => {
      return { currentArticle: this.findArticle() }
    })
  }
  // === ENDS Helper Functions

  // Click Event handler 
  handleClick = next => event => {
    event.preventDefault();
    let index = articles.indexOf(this.findArticle());
    const len = articles.length - 1;
    if (next)
      index = index === len ? 0 : index + 1;
    else
      index = index === 0 ? len : index - 1;
    const id = articles[index] ? articles[index].id : articles[0].id;
    this.props.history.push(id)
  }

}

export default InfoContainer;
