import React from 'react'
import {connect} from 'react-redux';

import {signUpUser} from '../ducks/auth';

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

	handleChange(e, {name, value}) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className='register-form'>
				<form onSubmit={this.handleSubmit}>
					<input
						name='fullname' placeholder='Full name'
						onChange={this.handleChange}/>
					<input
						name='username' placeholder='Username'
						onChange={this.handleChange}/>
					<input
						name='email' placeholder='E-mail address'
						onChange={this.handleChange}/>
					<input
						name='password' placeholder='Password'
						type='password'
						onChange={this.handleChange}/>

					<button> Register </button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({auth: {loadingUser}}) => {
	return {
		loadingUser
	};
};

const mapDispatchToProps = {
	signUpUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
