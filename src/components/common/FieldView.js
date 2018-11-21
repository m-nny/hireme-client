import React from 'react';

const GrayField = ({
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

const WhiteField = ({
	id, input, label, type, placeholder
}) => (
	<div className="white-field">
		<label htmlFor={id}>{label}</label>
		<input {...input} placeholder={placeholder} type={type} id={id}/>
	</div>
);

export {GrayField, WhiteField};
