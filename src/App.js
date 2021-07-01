import React from 'react';
import Table1 from './components/table1.js';
import List from "./functions/List.js";
import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <h1>Continents</h1>
      <Table1/>
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path={'/AF'} render={() => <List continent = {'AF'}/>} />
          <Route exact path={'/AN'} render={() => <List continent = {'AN'}/>} />
          <Route exact path={'/AS'} render={() => <List continent = {'AS'}/>} />
          <Route exact path={'/EU'} render={() => <List continent = {'EU'}/>} />
          <Route exact path={'/NA'} render={() => <List continent = {'NA'}/>} />
          <Route exact path={'/OC'} render={() => <List continent = {'OC'}/>} />
          <Route exact path={'/SA'} render={() => <List continent = {'SA'}/>} />
        </Switch>
      </div>      
    </div>
  );
}

export default App;
