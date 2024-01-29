import {render} from 'preact';
import html from './render.js';
import DatasourceSelector from "./datasource-selector.js";

render(html`
    <div class="container">
        <h2>Rules Engine Prototype</h2>
        <${DatasourceSelector}/>
    </div>`, document.getElementById('app'))
