import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", function(){
  const appStore = configureStore();
  // window.store = appStore;
  // window.fetchTodos = fetchTodos;

  ReactDOM.render(<Root store={ appStore } />, document.getElementById('content'));
});
