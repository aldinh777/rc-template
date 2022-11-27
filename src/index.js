import { append } from '@aldinh777/reactive-cml/dom/dom-util';
import ComponentError from '@aldinh777/reactive-cml/error/ComponentError';
import App from './App.rc';

try {
    append(document.querySelector('#app'), App());
} catch (e) {
    const err = ComponentError.componentCrash('App', e);
    const pre = document.createElement('pre');
    pre.innerText = err;
    document.body.appendChild(pre);
    throw err;
}
