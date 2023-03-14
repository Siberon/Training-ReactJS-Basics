import { useState } from "react";
import "./App.css";

import { Table, Button, Form, Options } from "./components";

function App() {
	const handleSubmit = (e) => {
		//Prevent from refreshing
		e.preventDefault();
		if (editMode) {
			// Update existing row
			console.log("edit mode is true");
			const newTableData = [...tableData];
			newTableData.splice(editIndex, 1, formData);
			setTableData(newTableData);
			setEditMode(false);
			setEditIndex(null);
		} else {
			console.log("edit mode is false");
			setTableData([...tableData, formData]);
		}
		setFormData({
			number: (formData.number += 1),
			name: "",
			age: "",
			status: "active",
		});
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleEdit = (index) => {
		// Set form data to selected row
		if (editIndex === null) {
			setFormData(tableData[index]);
		}

		setEditMode(true);
		setEditIndex(index);
	};

	const handleDelete = (index) => {
		// Remove selected row
		const newTableData = [...tableData];
		console.log(newTableData.length);

		if (newTableData.length === 1) {
			setFormData({ ...formData, number: 1 });
		}

		newTableData.splice(index, 1);
		setTableData(newTableData);
	};
	const [formData, setFormData] = useState({
		number: 0,
		name: "",
		age: "",
		status: "active",
	});
	const [tableData, setTableData] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	// console.log(formData)
	return (
		<form onSubmit={handleSubmit}>
			<Form
				title="Name"
				name="name"
				state={formData.name}
				setState={handleChange}
			/>
			<Form
				title="Age"
				name="age"
				state={formData.age}
				setState={handleChange}
			/>
			<Options
				name="status"
				title="status"
				stateStatus={formData.status}
				setStateStatus={handleChange}
			/>
			<Button />
			<Table
				tableData={tableData}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
		</form>
	);
}

export default App;
