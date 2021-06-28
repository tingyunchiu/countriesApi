import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

let GET_ALL_COUNTRIES = gql`
	query Continent($continentcode: ID!)
	{
		continent (code: $continentcode){
			name
			countries {
			  code
			  name
			  native
			  capital
			  currency
			  languages{
			    name
			  }
			}
		}
	}
`;


const List = ({continent}) => (
	<Query
		query={GET_ALL_COUNTRIES}
		variables={{ continentcode:  continent}}
	>
    {({ loading, error, data }) => {
    	if (loading) return <p>Loading...</p>;
      	if (error) return <p>Error :(</p>;
		const lists = data.continent.countries.map(item => (
        	<tr>
      			<td style={{wordBreak: 'break-word'}}>{item.code}</td>
      			<td style={{wordBreak: 'break-word'}}>{item.name}</td>
      			<td style={{wordBreak: 'break-word'}}>{item.native}</td>
      			<td style={{wordBreak: 'break-word'}}>{item.capital}</td>
      			<td style={{wordBreak: 'break-word'}}>{item.currency}</td>
      			<td style={{wordBreak: 'break-word'}}>{item.languages.map(lan => <span>{lan.name + "\n"}</span>)}</td>
  			</tr>
      	));

	return (
	    <div style = {{width: '75%', overflowX: 'auto'}}>
		    <h1>{data.continent.name}</h1>
		    <table style = {{width: '100%', tableLayout: 'fixed'}}>
		        <thead style={{backgroundColor: "grey"}}>
		          	<tr>
		            	<th style={{ wordBreak: 'break-word'}}>Code</th>
		            	<th style={{ wordBreak: 'break-word'}}>Name</th>
		            	<th style={{ wordBreak: 'break-word'}}>Native</th>
						<th style={{ wordBreak: 'break-word'}}>Capital</th>
						<th style={{ wordBreak: 'break-word'}}>Currency</th>
						<th style={{ wordBreak: 'break-word'}}>Language</th>
		          	</tr>
		        </thead>
		        <tbody>{lists}</tbody>
		    </table>
		</div>
	)
	}}
	</Query>
	)

export default List;