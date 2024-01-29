import html from './render.js';

function DatasourceSelector(props) {
    return html`
        <div>
            <div>
                <label for="datasource">Please Select Datasource Record</label>
            </div>
            <select name="datasource" class="form-select">
                <option value="Invention">Invention Record</option>
                <option value="IP">IP Record</option>
            </select>
        </div>
    `;
}

export default DatasourceSelector;