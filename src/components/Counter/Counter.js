import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { observer, inject, PropTypes as MobxPropTypes } from 'mobx-react';
import { CounterContainer, CounterTodoItem } from './Counter.styles';

class Counter extends Component {
  state = { inputValue: '' };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { CounterStore } = this.props;
    const { inputValue } = this.state;
    return (
      <CounterContainer>
        <div>
          <code>Counter</code>
        </div>
        <div>
          {CounterStore.todos.map((todo, index) => (
            <CounterTodoItem
              key={index}
              className="puppy"
              // onClick={() => CounterStore.remove(todo)}
            >
              {todo}
            </CounterTodoItem>
          ))}
        </div>
        <input
          onChange={this.handleInputChange}
          value={inputValue}
          type="text"
        />
        <button onClick={() => CounterStore.add(inputValue)}>+</button>
      </CounterContainer>
    );
  }
}

Counter.propTypes = {
  CounterStore: PropTypes.shape({
    todos: MobxPropTypes.observableArray
  })
};

export default inject('CounterStore')(observer(Counter));
