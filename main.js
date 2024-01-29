import {render} from 'preact';
import html from './render.js';
import DatasourceSelector from "./datasource-selector.js";

render(html`<${DatasourceSelector} />`, document.getElementById('app'))
