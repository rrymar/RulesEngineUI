import './OutMapper.css';
import {useState} from 'react';
import {QueryBuilder} from 'react-querybuilder';
import {QueryBuilderBootstrap} from '@react-querybuilder/bootstrap';
import 'react-querybuilder/dist/query-builder.css';

const defaultOperators = [{ name: 'params', label: 'params'}];

const fields = [
    {name: "Docket.Name", label: "Docket.Name"},
    {name: "Docket.Field1", label: "Docket.Field1" },
    {name: "Docket.Field2", label: "Docket.Field2" },
    {name: "Docket.Field3", label: "Docket.Field3" },
    {name: "Docket.Assignee", label: "Docket.Assignee" },
    {name: "Docket.ComplexField1", label: "Docket.ComplexField1"},
    {name: "Docket.ComplexField2", label: "Docket.ComplexField2" }
];

const actions = [
    {name: "CreateNote", label: "Create a note",operators: defaultOperators},  
    {name: "Form.FormName.QuestionName", label: "Update Form.FormName.QuestionName", operators: defaultOperators, valueEditorType: 'select', values: fields},
    {name: "Form.FormName.QuestionName1", label: "Update Form.FormName.QuestionName1", operators: defaultOperators},
    {name: "Form.FormName.QuestionName2", label: "Update Form.FormName.QuestionName2", operators: defaultOperators},
    {name: "Form.Support.ThirdPartySupport", label: "Update Form.Support.ThirdPartySupport", operators: defaultOperators},
];




export default function OutMapper() {
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [
            {field: 'CreateNote', operator: 'params', value: 'Docket finished by {Assignee}'},
            {field: 'Form.FormName.QuestionName', operator: 'params', value: 'Docket.Field3'},
            {field: 'Form.FormName.QuestionName1', operator: 'params', value: 'Docket.ComplexField2 * 21 - 7'},
            {field: 'Form.FormName.QuestionName2', operator: 'params', value: 'Docket.ComplexField2 * 21 + (9 * Docket.Field3)'},
            {field: 'Form.Support.ThirdPartySupport', operator: 'params', value: 'If Docket.ComplexField1 = NIH THEN Yes ELSE No'},
        ],
    });

    return (
        <div className="out-mappper">
            <div>4. Map actions on finish</div>
            <QueryBuilderBootstrap>
                <QueryBuilder fields={actions} query={query}
                              controlClassnames={{queryBuilder: 'queryBuilder-branches'}}
                              onQueryChange={q => setQuery(q)}/>
            </QueryBuilderBootstrap>
        </div>
    );
}