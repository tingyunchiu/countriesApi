import React from 'react';
import Row1 from './row1.js';
import {items} from './items.js'


function Table1() {

	const rows = [];

	items.forEach(item => {
		rows.push(
		  <Row1 item = {item}
		  key={item.code}
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