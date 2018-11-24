import React from 'react';
import {getUserInfo, getUserProfile} from '../ducks/user';
import '../styles/_userprofile.sass'
import {connect} from 'react-redux';


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
		let {education, strong_skill, urls, employment} = details;
		return (
			<>
				<div className="personal-info field-specs">
					<h1 className="pink">Personal Info</h1>
					<div className="row">
						<img src={details.avatar_url} alt=""/>
						<div className="column" style={{width: '100%'}}>
							<div className="row">
								<div>Full Name:</div>
								<div>{details.fullname}</div>
							</div>
							<div className="row">
								<div>Username:</div>
								<div>{details.username}</div>
							</div>
							<div className="row">
								<div>Location:</div>
								<div>{details.location}</div>
							</div>
							<div className="row">
								<div>University:</div>
								<div>{education && education.university}</div>
							</div>
							<div className="row">
								<div>Major:</div>
								<div>{education && education.major}</div>
							</div>
							<div className="row">
								<div>Degree:</div>
								<div>{education && education.degree}</div>
							</div>
							<div className="row">
								<div>Graduation date:</div>
								<div>{education && education.graduation}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="skills field-specs">
					<h1>Skills</h1>
					<div className="row">
						<div>Strongest skill:</div>
						<div>{strong_skill && strong_skill.name}</div>
					</div>
					<div className="row">
						<div>Explanation:</div>
						<div>{strong_skill && strong_skill.description}</div>
					</div>
					<div className="row">
						<div>Other skills:</div>
						<div>{details.skills && details.skills.replace(/\|/g, ' ')}</div>
					</div>
					<div className="row">
						<div>GitHub URL:</div>
						<div>{urls.github}</div>
					</div>
					<div className="row">
						<div>LinkedIn URL:</div>
						<div>{urls.linked_in}</div>
					</div>
					<div className="row">
						<div>Web URL:</div>
						<div>{urls.web}</div>
					</div>
				</div>
				<div className="current-work field-specs">
					<h1>Current Job</h1>
					<div className="row">
						<div>Company:</div>
						<div>{employment && employment.company}</div>
					</div>
					<div className="row">
						<div>Role:</div>
						<div>{employment && employment.role}</div>
					</div>
					<div className="row">
						<div>Reference name:</div>
						<div>{employment && employment.reference.name}</div>
					</div>
					<div className="row">
						<div>Reference number:</div>
						<div>{employment && employment.reference.number}</div>
					</div>
				</div>
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
