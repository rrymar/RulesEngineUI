import './FilterQueryBuilder.css';
import { useState } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const fields  = [
    { name: 'RecordNumber', label: 'Record Number' },
    { name: 'DueDate', label: 'Due Date' },
    { name: 'PiSite', label: 'Pi Site' }
];
export default function FilterQueryBuilder() {
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [
            { field: 'RecordNumber', operator: 'beginsWith', value: '2023' },
            { field: 'PiSite', operator: 'in', value: 'MGH,BWH' },
        ],
    });

    return (
        <>
            <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />
            Query  
            <i>{formatQuery(query, 'sql')}</i>
        </>
    );
}