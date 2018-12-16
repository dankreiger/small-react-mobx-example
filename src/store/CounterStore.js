import { autorun, observable, action } from 'mobx';

class CounterStore {
  todos = observable([]);

  add = action(value => {
    this.todos.push(value);
  });

  // remove = action(t => {
  //   console.log(t, this.todos);
  //   this.todos = this.todos.filter(todo => todo !== t);
  //   return this.todos;
  // });
}

const store = (window.store = new CounterStore());
export default store;

autorun(() => {
  console.log(store.todos[0] ? store.todos[0].todo : '');
});
