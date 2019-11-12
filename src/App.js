import React from 'react';
import IndexPage from './pages/main/index'
import {GlobalStyle} from './styles/global'

class App extends React.Component { 
  render() {
    return (
      <div>
        <GlobalStyle/>
        <IndexPage/>
      </div>
    )
  }
}

export default App;
