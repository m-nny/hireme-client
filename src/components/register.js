import React from 'react'
import {connect} from 'react-redux';

import {signInUser, signUpUser} from '../ducks/auth';
import {Field, reduxForm} from 'redux-form';
import renderField from './common/field';
import {validateRegister} from '../utils/validate';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	submit(values) {
		return this.props.signUpUser(values)
			.then(() => this.props.signInUser(values))
	}

	render() {
		let {handleSubmit, submitting, error} = this.props;
		return (
			<form onSubmit={handleSubmit(this.submit)} className="form">
				<label className="description"> Let the force be with you! </label>
				<Field type='text' component={renderField} name='fullname' label='Name'/>
				<Field type='text' component={renderField} name='username' label='Username'/>
				<Field type='text' component={renderField} name='email' label='E-mail'/>
				<Field type='password' component={renderField} name='password' label='Password'/>
				<Field type='checkbox' component={renderField} name='agreement' id='agreement'
				       label="I agree with the terms and conditions "
				/>

				<button disabled={submitting}>Sign up</button>
				{error && <div className="error"> {error} </div>}
			</form>
		)
	}
}

const mapDispatchToProps = {
	signUpUser,
	signInUser
};

RegisterForm = connect(null, mapDispatchToProps)(RegisterForm);

RegisterForm = reduxForm({
	form: 'register',
	validate: validateRegister
})(RegisterForm);

export default RegisterForm
