import React from 'react';
import {Column, Row} from 'simple-flexbox';

import Header from './Header';
import '../styles/_userprofile.sass'
import {connect} from 'react-redux';
import {getUserProfile} from '../ducks/user';


class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		props.getUserProfile(props.username);
	}

	render() {
		return (
			<>
				<Header/>
				<Column flexGrow={1} className="profile">
					<Row horizontal="center">
						<h1 className="pink">Personal Info</h1>
					</Row>
					<Row>
						<Column className="col">
							<img src="https://theblueraft.files.wordpress.com/2010/08/aang.jpg" alt=""/>
						</Column>
						<Column className="col">
							<div>Full Name:</div>
							<div>Username:</div>
							<div>Location:</div>
							<div>University:</div>
							<div>Major:</div>
							<div>Degree:</div>
							<div>Graduation month&year:</div>
						</Column>
						<Column>
							<div>Assem Yeskabyl</div>
							<div>username</div>
							<div>city</div>
							<div>Nazarbayev University</div>
							<div>Computer Science</div>
							<div>Bachelor</div>
							<div>06 / 2020</div>
						</Column>

						{/*</div>*/}
					</Row>
				</Column>
				<Column flexGrow={1} className="skills">
					<Row horizontal="center">
						<h1>Skills</h1>
					</Row>
					<Row horizontal="center">
						<Column className="col1">
							<div>Strongest skill:</div>
							<div>Explanation:</div>
							<div>Other skills:</div>
							<div>GitHub URL:</div>
							<div>LinkedIn URL:</div>
							<div>Web URL:</div>
						</Column>
						<Column className="col2">
							<div>Assem Yeskabyl</div>
							<div>username</div>
							<div>city</div>
							<div>Nazarbayev University</div>
							<div>Computer Science</div>
							<div>Bachelor</div>
						</Column>

						{/*</div>*/}
					</Row>
				</Column>
				<Column flexGrow={1} className="currentwork">
					<Row horizontal="center">
						<h1>Current Job</h1>
					</Row>
					<Row horizontal="center">
						<Column className="col3">
							<div>Company:</div>
							<div>Role:</div>
							<div>Reference name:</div>
							<div>Reference number:</div>
						</Column>
						<Column className="col4">
							<div>BTSD</div>
							<div>Designer</div>
							<div>A.Volkov</div>
							<div>+7700400000</div>
						</Column>

						{/*</div>*/}
					</Row>
				</Column>


			</>
		);
	}
}

function mapStateToProps({user: {username}}) {
	return {
		username
	};
}

const mapDispatchToProps = {
	getUserProfile
};

UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfile;
