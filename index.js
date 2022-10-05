import { append } from '@aldinh777/reactive-cml/dom/dom-util';
import App from './src/App.rc';

append(document.querySelector('#app'), App());
