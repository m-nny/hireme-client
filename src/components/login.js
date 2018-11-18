import React from 'react'
import {connect} from 'react-redux';

import {signInUser} from '../ducks/auth';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {password: '', username: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		let {password, username} = this.state;
		let form = {password, username};
		// console.log(form);
		this.props.signInUser(form)
			.catch(error => console.log(error));
	}

	handleChange({target}) {
		let {name, value} = target;
		this.setState({[name]: value});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form">
				<label className="description">Let the force be with you!</label>
				<input
					name="username"
					type="text"
					placeholder="Username or Email"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button type="submit"> Log in </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
