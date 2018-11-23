import React from 'react';
import {WhiteField} from '../common/FieldView';
import {Field, reduxForm} from 'redux-form';
import Toggle from '../common/Toggle';


class CompanyRegistration extends React.Component {
	submit(values) {
		console.log(values);
	}

	render() {
		let {submitting, handleSubmit} = this.props;
		// console.log(this.props);
		return (
			<form className="registration-container" onSubmit={handleSubmit(this.submit)}>
				<label className= "button">Company Info</label>
				<div className="block">
					<label className="pinky">General Info</label>
					<Field name="name" type="text" component={WhiteField} label="Company Name*"/>
					<Field name="location" type="text" component={WhiteField} label="Location*"/>
					<Field name="Specialization" type="text" component={WhiteField} label="Company Specialization*"/>
					<Field name="employees" type="text" component={WhiteField} label="Number of employees*"/>
					<Field name="experience" type="text" component={WhiteField} label="Years of experience*"/>
					<Field name="hidden" component={Toggle} left="Display Profile" right="Hide Profile"/>
				</div>

				<div className="block">
					<label className="pinky">Provide us some links to prove your reliability</label>
					<Field name="urls.github" type="text" component={WhiteField} label="GitHub URL"/>
					<Field name="urls.linkedin" type="text" component={WhiteField} label="LinkedIn URL"/>
					<Field name="urls.web" type="text" component={WhiteField} label="Web URL"/>

					<label className="pinky">Profile Manager Info</label>
					<Field name="manager.fullname" type="text" component={WhiteField} label="Name & Surname"/>
					<Field name="manager.role" type="text" component={WhiteField} label="Role in company"/>
					<Field name="manager.linkedin" type="text" component={WhiteField} label="Linkedin Profile"/>
				</div>
				<button type="submit" disabled={submitting}>Submit</button>
			</form>
		);
	}
}

CompanyRegistration = reduxForm({
	form: 'ProfileInfo',
})(CompanyRegistration);

export default CompanyRegistration;
