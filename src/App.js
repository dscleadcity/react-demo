import React from 'react';

import Message from './components/message';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <Message />
      </div>
    );
  }
}

export default App;
