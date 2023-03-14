import React from "react";

const Table = ({ tableData, handleEdit, handleDelete }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>No</th>
					<th>Name</th>
					<th>Age</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map((item, index) => (
					<tr key={item.number}>
						<td>{item.number}</td>
						<td>{item.name}</td>
						<td>{item.age}</td>
						<td>{item.status}</td>
						<td>
							<button onClick={() => handleEdit(index)}>Edit</button>
							<button onClick={() => handleDelete(index)}>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
