import React from 'react';
import {connect} from 'react-redux';
import {unauthenticated} from '../ducks/auth';

class SignOutPage extends React.Component {
	constructor(props) {
		super(props);
		props.unauthenticated();
	}

	render() {
		return (
			<div className="description">
				Soon you will be logged out...
			</div>
		);
	}
}

const mapDispatchToProps = {
	unauthenticated
};

SignOutPage = connect(null, mapDispatchToProps)(SignOutPage);

export default SignOutPage;
