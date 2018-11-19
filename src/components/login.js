import React from 'react'
import {connect} from 'react-redux';

import {signInUser} from '../ducks/auth';
import {Field, reduxForm} from 'redux-form';
import {validateLogin} from '../utils/validate';
import renderField from './common/field';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	submit(values) {
		console.log(values);
		return this.props.signInUser(values)
			.catch(error => console.log(error));
	}

	render() {
		let {handleSubmit, submitting} = this.props;
		return (
			<form onSubmit={handleSubmit(this.submit)} className="form">
				<label className="description">Let the force be with you!</label>
				<Field
					name="username"
					type="text"
					component={renderField}
					label="Username or Email"
				/>
				<Field
					name="password"
					type="password"
					component={renderField}
					label="Password"
				/>
				<button type="submit" disabled={submitting}>Log in</button>
			</form>
		)
	}
}

const mapStateToProps = ({auth: {loading, error}}) => {
	return {
		loading, error
	};
};

const mapDispatchToProps = {
	signInUser
};

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
LoginForm = reduxForm({
	form: 'login',
	validate: validateLogin
})(LoginForm);
export default LoginForm;
