export const navStyle = next => {
  const style = {
    position: 'fixed',
    top: '40%',
    outline: 'none',
    fontWeight: 'bold',
    borderRadius: '50%',
    fontSize: '25px'
  }

  if (next) 
    Object.assign(style, {
      right: '10px'
    })
  else
    Object.assign(style, {
      left: '10px'
    })
    
  return (style);
}