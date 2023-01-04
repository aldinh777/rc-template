import { append, mount, _doc } from '@aldinh777/reactive-cml/dom/dom-util';
import App from './App.rc';

try {
    mount(_doc.querySelector('#app'), App());
} catch (err) {
    const pre = document.createElement('pre');
    pre.innerText = err.stack || err;
    append(_doc.body, [pre]);
    console.error(err);
}
