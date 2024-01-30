import './FilterQueryBuilder.css';
import {useState} from 'react';
import {formatQuery, QueryBuilder} from 'react-querybuilder';
import {QueryBuilderBootstrap} from '@react-querybuilder/bootstrap';
import 'react-querybuilder/dist/query-builder.css';

const yesNo = [
    {name: "Y", label: "Yes"},
    {name: "N", label: "No"}
]

const institutions = [
    {name: "1", label: "Org1"},
    {name: "2", label: "Org2"},
    {name: "3", label: "Org3"},
    {name: "4", label: "Org4"},
]

const fields = [
    {name: 'RecordNumber', label: 'Record Number'},
    {name: 'DisclosureDate', label: 'Disclosure Date'},
    {name: 'Institution', label: 'Institution',valueEditorType: "select", values: institutions},
    {name: 'Owner', label: 'Owner Person'},
    {name: 'Category', label: 'Category'},
    {name: 'Form.Disclosure.InventionDescription', label: 'Form.Disclosure.InventionDescription'},
    {name: 'Form.Disclosure.DisclosedInThePast', label: 'Form.Disclosure.DisclosedInThePast'},
    {name: 'Form.Support.ThirdPartySupport', label: 'Form.Support.ThirdPartySupport', valueEditorType: "select", values: yesNo},
    {name: 'Form.Support.IsFundingSupported', label: 'Form.Support.IsFundingSupported',valueEditorType: "select", values: yesNo},
    {name: 'Form.FormName.QuestionName', label: 'Form.FormName.QuestionName'}
];
export default function FilterQueryBuilder() {
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [
            {field: 'RecordNumber', operator: 'beginsWith', value: '2023'},
            {field: 'Institution', operator: 'in', value: 'Org1,Org2'},
            {field: 'Category', operator: '=', value: 'Patent'},
            {field: 'Owner', operator: '=', value: 'Ruslan Rymar'},
            {field: 'Form.Support.IsFundingSupported', operator: '=', value: 'No'},
            {field: 'Form.FormName.QuestionName', operator: '=', value: 'Yes'}
        ],
    });

    return (
        <>
            <div>2. Query Builder</div>
            <QueryBuilderBootstrap>
                <QueryBuilder fields={fields} query={query}
                              controlClassnames={{queryBuilder: 'queryBuilder-branches'}}
                              onQueryChange={q => setQuery(q)}/>
            </QueryBuilderBootstrap>
            Query
            <i>{formatQuery(query, 'sql')}</i>
        </>
    );
}