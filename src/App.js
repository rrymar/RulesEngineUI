import './App.css';
import DatasourceSelector from "./DatasourceSelector";
import FilterQueryBuilder from "./FilterQueryBuilder";
import InputMapper from "./InputMapper";

function App() {
  return (
      <div className="container">
          <div className="row">
              <div className="col p-2">
                  <h2>Rules Engine Prototype</h2>
              </div>
          </div>
          <div className="row">
              <div className="col p-2">
                  <DatasourceSelector />
              </div>
          </div>
          <div className="row">
              <div className="col p-2">
               <FilterQueryBuilder />
              </div>
          </div>
          <div className="row">
              <div className="col p-2">
                  <InputMapper />
              </div>
          </div>
      </div>
  );
}

export default App;
