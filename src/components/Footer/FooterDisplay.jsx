import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <a style={myStyle} href={props.mail}> {props.name} </a>
      <p>Based on:
        {
          props.children
        }
      </p>
    </footer>
  )
}

// Inline style Object
const myStyle = {
  display: 'block',
  fontWeight: '600',
  textAlign: 'center'
}


export default Footer;