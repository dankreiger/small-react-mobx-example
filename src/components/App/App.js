import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import RidiculousCounter from '../RidiculousCounter/RidiculousCounter';
import Another from '../Another/Another';
import { AppContainer, Heading } from './App.styles';

// import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Heading>
          <span>What up</span> <code>Mobx</code>
        </Heading>
        <Counter />
        <hr />
        <RidiculousCounter />
        <hr />
        <div>
          <Another />
        </div>
        {/* <DevTools /> */}
      </AppContainer>
    );
  }
}

export default App;
