import React from 'react';
import Row1 from './row1.js';

function Table1({onSelectContinent}) {
	const items =[
		{'code': 'AF', 'name':'Africa', 'num':58},
		{'code': 'AN', 'name':'Antarctica',  'num':5},
		{'code': 'AS', 'name':'Asia',  'num':52},
		{'code': 'EU', 'name':'Europe',  'num':53},
		{'code': 'NA', 'name':'North America',  'num':41},
		{'code': 'OC', 'name':'Oceania',  'num':27},
		{'code': 'SA', 'name':'South America',  'num':14}
	]
	const rows = [];

	items.forEach(item => {
		rows.push(
		  <Row1 item = {item}
		  key={item.code}
		  onSelectContinent = {onSelectContinent}
		  />
		)
	})
	return(
	<div style = {{width: '35%', overflowX: 'auto'}}>
	    <table style = {{width: '100%', tableLayout: 'fixed'}}>
	        <thead style={{backgroundColor: "grey"}}>
	          <tr>
	            <th style={{width: '33%', wordBreak: 'break-word'}}>Code</th>
	            <th style={{width: '33%', wordBreak: 'break-word'}}>Name</th>
	            <th style = {{wordBreak: 'break-word'}}>Numbers of Countries</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	    </table>
	</div>
	)
}
export default Table1;