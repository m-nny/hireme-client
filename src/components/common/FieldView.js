import React from 'react';

const FieldView = ({
	                     id,
	                     input,
	                     label,
	                     type,
	                     meta: {touched, error, warning}

                     }) => (
	<div className='field-container'>
		<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '0px'}}>
			<input {...input} placeholder={label} type={type} id={id}/>
			{type === 'checkbox' && <label htmlFor={id}>{label}</label>}
		</div>
		{touched &&
		((error && <div className="error">{'* ' + error}</div>) ||
			(warning && <span>{warning}</span>))}
	</div>
);

export default FieldView;
