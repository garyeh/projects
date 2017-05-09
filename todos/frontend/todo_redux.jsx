import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import allTodos from '../reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function(){
  const appStore = configureStore();

  ReactDOM.render(<Root store={ appStore } />, document.getElementById('root'));
});
