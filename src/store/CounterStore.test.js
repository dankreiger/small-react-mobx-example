import { CounterStore } from './CounterStore';

describe('CounterStore', () => {
  it('adds new items', () => {
    const store = new CounterStore();
    expect(store.todos.length).toBe(0);
    store.add('some item');
    expect(store.todos.length).toBe(1);
    expect(store.todos[0]).toBe('some item');
  });
});
