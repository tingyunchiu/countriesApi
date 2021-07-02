import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function Row1({item}) {
  return(
	<tr>
  		<td style={{width: '33%', wordBreak: 'break-word'}}>{item.code}</td>
      	<td style={{width: '33%', wordBreak: 'break-word'}}>
        	<Link to={'/' + item.code}>{item.name}</Link>
      	</td>
      	<td style = {{wordBreak: 'break-word'}}>{item.num}</td>
    </tr>
  )
}
export default  withRouter(Row1);