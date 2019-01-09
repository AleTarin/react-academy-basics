
# Sintaxis
- JSX: In jsx use curly brackets "{}" to add javascript code, this js will be evaluated and the result will appear on the final HTML.
- Map(javascript): Iterates the array and create a new array with a given function
Read More on: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map


``` javascript
// Functional component where we pass a props object
const List = (props) => {
  // You can only return one thing in a function, 
  // that is why our JSX components should have an html tag that wraps everything.
  return (
    <article>
    <h1>{props.title}</h1>
      <ul>
        {
          // Map to iterate our list array that returns a new array (inmmutability)
          props.list.map( unit => (<li> { unit } </li>))
          // In this example: ['a','b'] => ['<li>a</li>','<li>b</li>']
        }
      </ul>
  </article>
  );
}

```

# Props
Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.

## State 
State is used for mutable data, or data that will change. This is particularly useful for user input. 

Declare it
``` javascript
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
```

Use it
```
  render() {
    return (
      <div>
          Hi, this is an state {this.state.name}
      </div>
    );
  }
```