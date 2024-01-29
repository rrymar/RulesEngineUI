import './InputMapper.css';
import {useState} from 'react';
import {formatQuery, QueryBuilder} from 'react-querybuilder';
import {QueryBuilderBootstrap} from '@react-querybuilder/bootstrap';
import 'react-querybuilder/dist/query-builder.css';

const defaultOperators = [{ name: '=', label: '='}];

const fromFields = [
    {name: 'RecordNumber', label: 'Record Number'},
    {name: 'DisclosureDate', label: 'Disclosure Date'},
    {name: 'Institution', label: 'Institution'},
    {name: 'Owner', label: 'Owner Person'},
    {name: 'Category', label: 'Category'},
    {name: 'Form.Disclosure.InventionDescription', label: 'Form.Disclosure.InventionDescription'},
    {name: 'Form.Disclosure.DisclosedInThePast', label: 'Form.Disclosure.DisclosedInThePast'},
    {name: 'Form.Support.ThirdPartySupport', label: 'Form.Support.ThirdPartySupport'},
    {name: 'Form.Support.IsGovernmentFundingSupport', label: 'Form.Support.IsGovernmentFundingSupport'},
    {name: 'Form.FormName.QuestionName', label: 'Form.FormName.QuestionName'}
];

const toFields = [
    {name: "Docket.Name", label: "Docket.Name"},  
    {name: "Docket.Field1", label: "Docket.Field1", operators: defaultOperators, valueEditorType: 'select', values: fromFields }, 
    {name: "Docket.Field2", label: "Docket.Field2", operators: defaultOperators, valueEditorType: 'select', values: fromFields }, 
    {name: "Docket.Field3", label: "Docket.Field3", operators: defaultOperators, valueEditorType: 'select', values: fromFields }, 
    {name: "Docket.Assignee", label: "Docket.Assignee", operators: defaultOperators, valueEditorType: 'select', values: fromFields }  
];

export default function InputMapper() {
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [
            {field: 'Docket.Name', operator: '=', value: 'New Docket Item'},
            {field: 'Docket.Assignee', operator: '=', value: 'Owner'},
            {field: 'Docket.Field1', operator: '=', value: 'Form.FormName.QuestionName'},
        ],
    });

    return (
        <div className="input-mappper">
            <div>3. Map fields of created entity</div>
            <QueryBuilderBootstrap>
                <QueryBuilder fields={toFields} query={query}
                              controlClassnames={{queryBuilder: 'queryBuilder-branches'}}
                              onQueryChange={q => setQuery(q)}/>
            </QueryBuilderBootstrap>
        </div>
    );
}