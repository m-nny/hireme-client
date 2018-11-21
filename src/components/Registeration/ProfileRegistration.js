import React from 'react';
import {WhiteField} from '../common/FieldView';
import {Field, reduxForm} from 'redux-form';
import Toggle from '../common/Toggle';

class ProfileRegistration extends React.Component {
	render() {
		return (
			<div className="block">
				<label>Personal Info</label>
				<Field name="location" type="text" component={WhiteField} label="Location*"/>
				<Field name="university" type="text" component={WhiteField} label="University/School*"/>
				<Field name="degree" type="text" component={WhiteField} label="Degree*"/>
				<Field name="major" type="text" component={WhiteField} label="Major*"/>
				<Field name="graduation" type="text" component={WhiteField} label="Graduation Month/Year*"/>
				<Field name="private" type="text" component={Toggle} left="Display Profile" right="Hide Profile"/>
			</div>
		);
	}
}

ProfileRegistration = reduxForm({
	form: 'UserProfile',
})(ProfileRegistration);

export default ProfileRegistration;
