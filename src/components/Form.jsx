import React from "react";

const Form = ({ title, state, setState, name }) => {
	return (
		<>
			<div>{title}</div>
			<input type="text" name={name} value={state} onChange={setState} />
		</>
	);
};

export default Form;
