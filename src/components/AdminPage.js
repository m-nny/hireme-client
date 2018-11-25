import React from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import {getLogs} from '../ducks/admin';
import '../styles/_logs.sass';

class AdminPage extends React.Component {
	constructor(props) {
		super(props);
		props.getLogs();
	}

	render() {
		let {logs, error} = this.props;
		return (
			<>
				<Header/>
				<div className="Logs">
					<div className="description">
						Admin page
					</div>
					{logs.map((log, idx) => <div className="log" key={idx}>{log}</div>)}
					{error && <div> {error} </div>}
				</div>
			</>
		)
	}
}

function mapStateToProps({admin: {logs, error}}) {
	return {
		logs, error
	}
}

const mapDispatchToProps = {
	getLogs
};

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default AdminPage;
