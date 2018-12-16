import React from 'react';
import { inject, observer } from 'mobx-react';

const Another = ({ CounterStore }) => {
  return (
    <div>
      <code>Another</code>
      <p>
        I'm observing the <code>CounterStore</code>
      </p>
      <small>
        which is more like a todo list...any creativity I had is officially gone
      </small>
      {CounterStore.todos.map((todo, index) => (
        <span style={{ paddingLeft: '10px' }} key={index}>
          {todo}
        </span>
      ))}
    </div>
  );
};

export default inject('CounterStore')(observer(Another));
