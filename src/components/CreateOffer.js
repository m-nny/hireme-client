import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {WhiteField} from './common/FieldView';

class CreateOffer extends React.Component {
	render() {
		return (
			<form className="registration-container">
				<label className="button">Job Offer</label>
				<div className={['block', 'pinky'].join(' ')}>

					<label className="moyaTupost">
						Company
						<select className="dropdown" value="Choose one" onChange={this.handleChange}>
							<option value="Google">Google</option>
							<option value="Amazon">Amazon</option>
							<option value="JPMorgan">JPMorgan</option>
						</select>
					</label>
					<Field name="role" type="text" component={WhiteField} label="Role*"/>
					<Field name="location" type="text" component={WhiteField} label="Location*"/>
					<Field name="responsibilities" type="text" component={WhiteField} label="Description of responsibilities*"/>
					<Field name="qualifications" type="text" component={WhiteField} label="Minimum Qualifications*"/>

				</div>
				<button className={['button', 'pinky'].join(' ')} type="submit">Post</button>
			</form>
		);
	}

}

CreateOffer = reduxForm({
	form: 'create_offer',
})(CreateOffer);

export default CreateOffer;
