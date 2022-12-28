import { append } from '@aldinh777/reactive-cml/dom/dom-util';
import App from './App.rc';

try {
    append(document.querySelector('#app'), App());
} catch (err) {
    const pre = document.createElement('pre');
    pre.innerText = err.stack;
    document.body.appendChild(pre);
    console.error(err);
}
