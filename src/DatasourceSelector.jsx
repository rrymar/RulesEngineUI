export default function DatasourceSelector() {
    return (
        <div>
            <div>
                <label htmlFor="datasource">1. Please Select Datasource Record</label>
            </div>
            <select name="datasource" className="form-select" style={{width: "auto"}}>
                <option value="Invention">Invention Record</option>
                <option value="IP">IP Record</option>
            </select>
        </div>
    );
}