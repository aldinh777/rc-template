import { state, stateObserve } from '@aldinh777/reactive';
import { statelist } from '@aldinh777/reactive/util/collection';
import { stateLocalStorage } from '@aldinh777/reactive-cml/dom/reactive-util';

export const navbar = stateLocalStorage('nav', 'home');
export const mainColor = stateLocalStorage('theme', 'purple');

export const counter = state(0);
export const urmom = state('isabella');
export const todo = statelist([]);
export const todoLength = state(todo.raw.length);
todo.onInsert(() => (todoLength.value = todo.raw.length));
todo.onDelete(() => (todoLength.value = todo.raw.length));
export const todoIsEmpty = stateObserve(todoLength, (length) => length <= 0);
