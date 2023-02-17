import { _doc, _elem, append } from '@aldinh777/reactive-cml/dom/dom-util';
import { mount } from '@aldinh777/reactive-cml/dom';
import ComponentError from '@aldinh777/reactive-cml/error/ComponentError';
import App from './App.rc';

!(async function () {
    try {
        mount(_doc.querySelector('#app'), await App());
    } catch (err) {
        const blacklist = ['StateIf', 'Children'];
        if (err.componentTraces) {
            const cause = err.componentTraces.at(-1);
            err = new ComponentError(
                `crash at component '${cause}'`,
                ['App', ...err.componentTraces].filter((comp) => !blacklist.includes(comp)),
                err.reason
            );
        }
        const pre = _elem('pre');
        pre.innerText = err.stack || err;
        append(_doc.body, [pre]);
        console.error(err);
    }
})();
