import React from 'react';
import {WhiteField} from '../common/FieldView';
import {Field, reduxForm} from 'redux-form';
import Toggle from '../common/Toggle';
import SkillsetView from '../common/SkillSet';

const skills = [
	'C/C++',
	'Python',
	'SQL',
	'Management',
	'Java',
	'React',
];

const StudentForm = () => (
	<>
		<div className="block">
			<label>Personal Info</label>
			<Field name="location" type="text" component={WhiteField} label="Location*"/>
			<Field name="education.university" type="text" component={WhiteField} label="University/School*"/>
			<Field name="education.degree" type="text" component={WhiteField} label="Degree*"/>
			<Field name="education.major" type="text" component={WhiteField} label="Major*"/>
			<Field name="education.graduation" type="text" component={WhiteField} label="Graduation Month/Year*"/>
			<Field name="hidden" component={Toggle} left="Display Profile" right="Hide Profile"/>
		</div>
		<div className="block">
			<label>Your skills matter more than experience!</label>
			<Field name="strong_skill.name" type="text" component={WhiteField} label="Define your strongest skill"/>
			<Field name="strong_skill.desc" type="text" component={WhiteField} label="Why do you think so? (140 words)"/>

			<label>Do you have any proof of your strongest skill?</label>
			<Field name="urls.github" type="text" component={WhiteField} label="GitHub URL"/>
			<Field name="urls.linked_in" type="text" component={WhiteField} label="LinkedIn URL"/>
			<Field name="urls.web" type="text" component={WhiteField} label="Web URL"/>

			<label>Define other skills</label>
			<SkillsetView skills={skills}/>
		</div>
	</>
);

class StudentRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isNewgrad: false};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange({target}) {
		let isNewgrad = target.checked;
		this.setState({isNewgrad});
	}

	submit(values) {
		console.log(values);
	}

	render() {
		let {isNewgrad} = this.state;
		let {submitting, handleSubmit} = this.props;
		// console.log(this.props);
		return (
			<form className="registration-container" onSubmit={handleSubmit(this.submit)}>
				<label>Profile Info</label>
				<Toggle left="Student" right="New Grad" onChange={this.handleChange} value={isNewgrad}/>
				{!isNewgrad && <StudentForm/>}
				<button type="submit" disabled={submitting}>Submit</button>
			</form>
		);
	}
}

StudentRegistration = reduxForm({
	form: 'UserProfile',
})(StudentRegistration);

export default StudentRegistration;
