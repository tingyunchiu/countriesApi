import React from 'react';

function Row1({item, onSelectContinent}) {
return(
	<tr>
  		<td style={{width: '33%', wordBreak: 'break-word'}}>{item.code}</td>
        <td style={{width: '33%', wordBreak: 'break-word'}}>
        	<button id = {item.code}
        			type="button"
        			style ={{border: 'none', backgroundColor: 'white', textDecoration: 'underline'}}
        			onClick={(e) => onSelectContinent(e.target.id)}>
         		{item.name}
         	</button>
        </td>
        <td style = {{wordBreak: 'break-word'}}>{item.num}</td>
  	</tr>

)
}
export default Row1;