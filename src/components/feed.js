import React from 'react';
import {connect} from 'react-redux';

import {unauthenticated as signOutUser} from '../ducks/auth';

class Feed extends React.Component {
	render() {
		return (
			<div>
				This is some fake news
				<button onClick={() => this.props.signOutUser()}>Sign out</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	signOutUser
};

export default connect(null, mapDispatchToProps)(Feed);
