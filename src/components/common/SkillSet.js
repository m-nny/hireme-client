import React from 'react'
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

const SkillView = ({
	                   id, input, label, type, placeholder
                   }) => (
	<div className={"skill" + (!input.value ? " disabled" : "")}>
		<label htmlFor={id}>{label}</label>
		<input {...input} placeholder={placeholder} type="checkbox" id={id}/>
	</div>
);
const SkillsetView = ({skills}) => (
	<div className="job-skillset">
		{skills.map((name, idx) => (
			<Field name={`skills.${name}`} key={idx} label={name} component={SkillView} id={`skill-${idx}`}/>
			// <Field name={name} key={idx} type="checkbox" component={SkillView}/>
		))}
	</div>
);

SkillsetView.propTypes = {
	skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillsetView;
