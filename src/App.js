import React, {useState, useEffect} from 'react';
import Table1 from './table1.js';
import List from "./List.js"

function App() {
  const [continent, setContinent] = useState('')

  const onSelectContinent = (e) =>{
    setContinent(e)
  }

  useEffect(() => {
    <List continent = {continent}/>
  }, [continent]);

  return (
    <div>
      <h1>Continents</h1>
      <Table1 onSelectContinent = {onSelectContinent}/>
      {continent.length ===2
      ? <List continent = {continent}/>
      : null
      }
    </div>
  );
}

export default App;
