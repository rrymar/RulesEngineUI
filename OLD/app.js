import {render} from 'preact';
import html from './render.js';
import DatasourceSelector from "./datasource-selector.js";
import QueryBuilder from "./filter-query-builder.js";

render(html`
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Rules Engine Prototype</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <${DatasourceSelector}/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <${QueryBuilder}/>
            </div>
        </div>
    </div>`, document.getElementById('app'))
