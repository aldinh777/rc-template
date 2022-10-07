import { append } from '@aldinh777/reactive-cml/dom/dom-util';
import App from './src/App.rc';

try {
    append(document.querySelector('#app'), App());
} catch (e) {
    const err = document.createElement('pre');
    err.innerText = e;
    document.body.appendChild(err);
}
