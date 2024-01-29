import './FilterQueryBuilder.css';
import { useState } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const fields  = [
    { name: 'RecordNumber', label: 'Record Number' },
    { name: 'DisclosureDate', label: 'Disclosure Date' },
    { name: 'Institution', label: 'Institution' },
    { name: 'Owner', label: 'Owner Person' },
    { name: 'Category', label: 'Category' },
    { name: 'Form.Disclosure.InventionDescription', label: 'Form.Disclosure.InventionDescription' },
    { name: 'Form.Disclosure.DisclosedInThePast', label: 'Form.Disclosure.DisclosedInThePast' },
    { name: 'Form.Support.ThirdPartySupport', label: 'Form.Support.ThirdPartySupport' },
    { name: 'Form.Support.IsGovernmentFundingSupport', label: 'Form.Support.IsGovernmentFundingSupport' },
    { name: 'Form.FormName.QuestionName', label: 'Form.FormName.QuestionName' }
];
export default function FilterQueryBuilder() {
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [
            { field: 'RecordNumber', operator: 'beginsWith', value: '2023' },
            { field: 'Institution', operator: 'in', value: 'Org1,Org2' },
            { field: 'Category', operator: '=', value: 'Patent' },
            { field: 'Owner', operator: '=', value: 'Ruslan Rymar' },
            { field: 'Form.Support.IsGovernmentFundingSupport', operator: '=', value: 'No' },
            { field: 'Form.FormName.QuestionName', operator: '=', value: 'Yes' }
        ],
    });

    return (
        <>
            <QueryBuilder fields={fields} query={query}
                          controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
                          onQueryChange={q => setQuery(q)} />
            Query  
            <i>{formatQuery(query, 'sql')}</i>
        </>
    );
}