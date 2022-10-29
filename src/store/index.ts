import { state, stateObserve, stateLocalStorage } from '@aldinh777/reactive-utils';
import { statelist } from '@aldinh777/reactive-utils/collection';

export const navbar = stateLocalStorage('nav', 'home');
export const mainColor = stateLocalStorage('theme', 'purple');
export const btnColor = stateObserve(mainColor, color => 'btn ' + color);

export const counter = state(0);
export const urmom = state('isabella');
export const todo = statelist([]);
export const todoLength = state(todo.raw.length);
todo.onInsert(() => (todoLength.value = todo.raw.length));
todo.onDelete(() => (todoLength.value = todo.raw.length));
export const todoIsEmpty = stateObserve(todoLength, (length) => length <= 0);
