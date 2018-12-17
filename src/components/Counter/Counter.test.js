import React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';
import { CounterStore } from '../../store/CounterStore';
import { CounterTodoItem } from './Counter.styles';

describe('Counter', () => {
  let component;
  let store;
  beforeEach(() => {
    store = new CounterStore();
    component = mount(<Counter CounterStore={store} />);
  });

  it('has an input field', () => {
    expect(component.find('input').length).toBe(1);
  });

  it('has an add button', () => {
    expect(component.find('button').length).toBe(1);
  });

  it('can add a todo item', () => {
    expect(component.props().CounterStore.todos).toEqual([]);

    component
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'woofer' } });

    expect(component.find('input').props().value).toBe('woofer');

    component.find('button').simulate('click');

    expect(component.props().CounterStore.todos).toEqual(['woofer']);
    expect(component.find(CounterTodoItem).length).toBe(1);
    expect(component.find(CounterTodoItem).text()).toBe('woofer');
  });
});
