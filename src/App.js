import React from 'react';
import Routes from './routes/index';
import {GlobalStyle} from './styles/global';

class App extends React.Component { 
  render() {

    return (
      <div>
        <GlobalStyle/>
        <Routes/>
      </div>
    )
  }
}

export default App;
