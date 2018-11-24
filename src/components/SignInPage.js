import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {signInUser} from '../ducks/auth';
import {validateLogin} from '../utils/validate';
import {GrayField} from './common/FieldView';

class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	submit(values) {
		return this.props.signInUser(values);
	}

	render() {
		let {handleSubmit, submitting, error} = this.props;
		return (
			<form onSubmit={handleSubmit(this.submit)} className="form">
				<label className="description">Let the force be with you!</label>
				<Field
					name="username"
					type="text"
					component={GrayField}
					label="Username or Email"
				/>
				<Field
					name="password"
					type="password"
					component={GrayField}
					label="Password"
				/>
				<button type="submit" disabled={submitting}>Log in</button>
				{error && <div className="error"> {error} </div>}
			</form>
		)
	}
}

const mapDispatchToProps = {
	signInUser
};

SignInForm = connect(null, mapDispatchToProps)(SignInForm);
SignInForm = reduxForm({
	form: 'login',
	validate: validateLogin
})(SignInForm);

export default SignInForm;
