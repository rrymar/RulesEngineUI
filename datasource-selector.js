import html from './render.js';

function DatasourceSelector(props) {
    return html`
        <select>
            <option value="Invention">Invention Record</option>
            <option value="IP">IP Record</option>
        </select>
    `;
}

export default DatasourceSelector;