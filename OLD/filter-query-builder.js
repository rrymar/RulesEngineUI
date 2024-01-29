import html from './render.js';
import { QueryBuilder, formatQuery } from 'react-querybuilder';

function FilterQueryBuilder(props) {
    const fields = [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
    ];

    const initialQuery = {
        combinator: 'and',
        rules: [
            { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
            { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },
        ],
    };
    
    return html`
        <${QueryBuilder} fields={fields} query={initialQuery} />
    `;
}

export default FilterQueryBuilder;