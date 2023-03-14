import React from "react";

const Options = ({ title, name, stateStatus, setStateStatus }) => {
	return (
		<>
			<label>{title}</label>
			<select name={name} value={stateStatus} onChange={setStateStatus}>
				<option value="active">Active</option>
				<option value="notActive">Not Active</option>
			</select>
		</>
	);
};

export default Options;
