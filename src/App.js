import './App.css';
import { useState } from 'react';
import data from "./data/data.json"


function App() {
  const [jsonContent] = useState(JSON.stringify(data, null, 2)); // Um die Daten formatiert anzuzeigen

  return (
    <div className="App">
      <header className="Tales of us">
      </header>
        <h>Test # 2</h>
        <label>{jsonContent ? jsonContent: 'Json content will appear here'}</label>
    </div>
  );
}

export default App;
