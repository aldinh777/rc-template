import { _doc, _elem, append } from '@aldinh777/reactive-cml/dom/dom-util';
import { mount } from '@aldinh777/reactive-cml/dom';
import App from './App.rc';

try {
    mount(_doc.querySelector('#app'), App());
} catch (err) {
    const pre = _elem('pre');
    pre.innerText = err.stack || err;
    append(_doc.body, [pre]);
    console.error(err);
}
