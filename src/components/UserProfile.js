import React from 'react';
import {Column, Row} from 'simple-flexbox';

import Header from './Header';
import '../styles/_userprofile.sass'
import {connect} from 'react-redux';
import {getUserInfo, getUserProfile} from '../ducks/user';


class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		props.getUserInfo().then(({username}) => props.getUserProfile(username));
	}

	render() {
		let {details, loading} = this.props;
		console.log('DETAILS', details, loading);
		if (!details.education || loading)
			return (<>
				<Header/>
				<div> Loading...</div>
			</>);
		let {education, strong_skill, urls} = details;
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
							<div>Graduation date:</div>
						</Column>
						<Column>
							<div>{details.fullname}</div>
							<div>{details.username}</div>
							<div>{details.location}</div>
							<div>{education && education.university}</div>
							<div>{education && education.major}</div>
							<div>{education && education.degree}</div>
							<div>{education && education.graduation}</div>
						</Column>
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
							<div>{strong_skill && strong_skill.name}</div>
							<div>{strong_skill && strong_skill.description}</div>
							<div>{details.skills && details.skills.replace(/\|/g, ' ')}</div>
							<div>{urls.github}</div>
							<div>{urls.linked_in}</div>
							<div>{urls.web}</div>
						</Column>

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

					</Row>
				</Column>
			</>
		);
	}
}

function mapStateToProps({user: {username, details, loading}}) {
	return {
		username, details, loading
	};
}

const mapDispatchToProps = {
	getUserProfile,
	getUserInfo,
};

UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfile;
