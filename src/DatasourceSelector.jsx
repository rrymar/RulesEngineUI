export default function DatasourceSelector() {
    return (
        <div>
            <div>
                <label for="datasource">Please Select Datasource Record</label>
            </div>
            <select name="datasource" className="form-select" style={{width: "auto"}}>
                <option value="Invention">Invention Record</option>
                <option value="IP">IP Record</option>
            </select>
        </div>
    );
}