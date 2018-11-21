import React from 'react';
import Toggle from '../common/Toggle';
import ProfileRegistration from './ProfileRegistration';

class FillProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isCompany: null};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(e) {
		let {name} = e.target;
		let isCompany = name.startsWith('company');
		this.setState({isCompany});
	}

	handleChange({target}) {
		let isCompany = target.checked;
		this.setState({isCompany});
	}

	render() {
		let {isCompany} = this.state;
		if (isCompany === null) {
			return (
				<div className="registration-container">
					<label className="description">Who am I?</label>
					<button name="student-button" onClick={this.handleClick}>Student</button>
					<button name="company-button" onClick={this.handleClick}>Company</button>
				</div>
			);
		}
		return (
			<div className="registration-container">
				<div className="registration-title">{!isCompany ? 'Profile' : 'Company'} Info</div>
				<Toggle onChange={this.handleChange} value={isCompany} left="Student" right="Company"/>
				{!isCompany && <ProfileRegistration/>}
			</div>
		)
	}
}

export default FillProfile
