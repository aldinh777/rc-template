import { state } from '@aldinh777/reactive';
import { stateLocalStorage } from '@aldinh777/reactive-cml/dom/reactive-util';

export const navbar = stateLocalStorage('nav', 'home');
export const mainColor = stateLocalStorage('theme', 'purple');

export const counter = state(0);
export const urmom = state('isabella');
