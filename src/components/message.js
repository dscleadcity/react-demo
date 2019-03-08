import React from 'react';

const one = {
  width: '10em',
  height: 'auto',
  padding: '1em',
  margin: '2em',
  textAlign: 'center',
  backgroundColor: '#61dafb'
}

const two = {
  backgroundColor: '#3cb371'
}

const three = {
  color: '#f0f0f0',
  backgroundColor: '#212121'
}

const Message = () => {
  return(
    <div>
      <h3 style={one}>Hello</h3>
      <h3 style={two}>Hi</h3>
      <h3 style={three}>Yo!</h3>
    </div>
  );
}

export default Message;
