import React from 'react'
import {connect} from 'react-redux';

import {signInUser, signUpUser} from '../ducks/auth';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {fullname: '', password: '', email: '', username: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		let {fullname, password, email, username} = this.state;
		let form = {fullname, password, email, username};
		this.props.signUpUser(form)
			.then(() => this.props.signInUser(form))
	}

	handleChange({target}) {
		let {name, type} = target;
		let value = type === 'checkbox' ? target.checked : target.value;
		this.setState({[name]: value});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form">
				<label className="description"> Let the force be with you! </label>
				<input type='text'
				       name='fullname' placeholder='Name'
				       onChange={this.handleChange}/>
				<input type='text'
				       name='username' placeholder='Username'
				       onChange={this.handleChange}/>
				<input type='text'
				       name='email' placeholder='E-mail'
				       onChange={this.handleChange}/>
				<input type='password'
				       name='password' placeholder='Password'
				       onChange={this.handleChange}/>
				<div className="form-checkbox">
					<input type='checkbox'
					       name='agreement'
					       id='agreement'
					       onChange={this.handleChange}/>
					<label htmlFor="agreement"> I agree with the terms and conditions </label>
				</div>

				<button>Sign up</button>
			</form>
		)
	}
}

const mapStateToProps = ({auth: {loadingUser}}) => {
	return {
		loadingUser
	};
};

const mapDispatchToProps = {
	signUpUser,
	signInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
