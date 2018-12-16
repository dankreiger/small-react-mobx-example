import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import {
  RidiculousCounterButton,
  RidiculousCounterContainer,
  RidiculousCounterCount
} from './RidiculousCounter.styles';

const RidiculousCounter = observer(
  class RidiculousCounter extends Component {
    countState = observable({ count: 0 });
    render() {
      return (
        <RidiculousCounterContainer>
          <code>RidiculousCounter</code>
          <RidiculousCounterCount>
            {this.countState.count}
          </RidiculousCounterCount>
          <div>
            <RidiculousCounterButton onClick={this.handleInc}>
              <span>+</span>
            </RidiculousCounterButton>
            <RidiculousCounterButton onClick={this.handleDec}>
              <span>-</span>
            </RidiculousCounterButton>
          </div>
        </RidiculousCounterContainer>
      );
    }

    handleInc = () => {
      this.countState.count++;
    };

    handleDec = () => {
      this.countState.count--;
    };
  }
);

export default RidiculousCounter;
