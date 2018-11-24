import React from 'react';
import {Column, Row} from 'simple-flexbox';
import {connect} from 'react-redux';
import {getUserInfo, getUserProfile} from '../ducks/user';
import '../styles/_userprofile.sass'


class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		props.getUserInfo().then(({username}) => props.getUserProfile(username));
	}

	render() {
		let {details, loading} = this.props;
		console.log('DETAILS', details, loading);
		if (!details.education || loading)
			return (
				<div> Loading...</div>
			);
		let {education, strong_skill, urls} = details;
		return (
			<>
				<Column flexGrow={1} className="profile">
					<Row horizontal="center">
						<h1 className="pink">Personal Info</h1>
					</Row>
					<Row>
						<Column className="col">
							<img src={details.avatar_url} alt=""/>
						</Column>
						<Column className="col">
							<Row>
								<div>Full Name:</div>
								<div>{details.fullname}</div>
							</Row>
							<Row>
								<div>Username:</div>
								<div>{details.username}</div>
							</Row>
							<Row>
								<div>Location:</div>
								<div>{details.location}</div>
							</Row>
							<Row>
								<div>University:</div>
								<div>{education && education.university}</div>
							</Row>
							<Row>
								<div>Major:</div>
								<div>{education && education.major}</div>
							</Row>
							<Row>
								<div>Degree:</div>
								<div>{education && education.degree}</div>
							</Row>
							<Row>
								<div>Graduation date:</div>
								<div>{education && education.graduation}</div>
							</Row>
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
