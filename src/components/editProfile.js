import React from 'react';
import {connect} from 'react-redux';
import {Dropdown, Form, Header, Message} from 'semantic-ui-react';
import {getUserProfile, setUserProfile} from "../ducks/user";
import {
	jobFields,
	jobOptions,
	mapDetailsToState,
	mapStateToDetails,
	roleOptions,
	skillOptions,
	universityOptions
} from "../utils/userInfo";

class EditProfile extends React.Component {
	handleChange = (e, {name, value}) => this.setState({[name]: value});
	handleToggle = (e, {name, checked}) => this.setState({[name]: checked});
	handleSubmit = (e) => {
		e.preventDefault();
		let details = mapStateToDetails(this.state);
		let {username} = this.props;
		this.props.setUserProfile({...details, username})
			.then(() => this.setState({success: true}))
			.catch(() => this.setState({fail: true}));

	};

	constructor(props) {
		super(props);
		let {username} = this.props;
		this.state = {fail: false, success: false};
		this.props.getUserProfile(username).then(details => this.setState(mapDetailsToState(details)));
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		let {username} = this.props;
		let {fullname, location, employment_company, employment_position, current_role, visible} = this.state;
		let {job_type, job_field, skills, university, graduation_year, graduation_month, major, degree,} = this.state;


		let {success, fail} = this.state;
		console.log("STATE:", this.state);
		let {loading, message} = this.props;
		return (
			<div>
				<Form loading={loading} success={success} error={fail} onSubmit={this.handleSubmit}>
					<Header>{username}</Header>
					<Form.Input name='fullname' label='Full name' placeholder='Full name' value={fullname}
					            onChange={this.handleChange} required/>
					<Form.Input name='location' label='Location' value={location}
					            onChange={this.handleChange} required/>
					<Header>Employment</Header>
					<Form.Group>
						<Form.Input name='employment_position' label='Employment Position' value={employment_position}
						            onChange={this.handleChange}/>
						<Form.Input name='employment_company' label='Employment Company' value={employment_company}
						            onChange={this.handleChange}/>
					</Form.Group>

					<Form.Select fluid
					             name='current_role' label='Current Role' placeholder='Current Role'
					             options={roleOptions} value={current_role} onChange={this.handleChange} required/>

					<Header>Education</Header>
					<Form.Group>
						<Form.Select fluid width={12}
						             name='university' label='Name' placeholder='University'
						             options={universityOptions} value={university} onChange={this.handleChange} required/>
						<Form.Input name='graduation_year' label='Graduation Year' value={graduation_year}
						            onChange={this.handleChange}/>
						<Form.Input name='graduation_month' label='Graduation Month' value={graduation_month}
						            onChange={this.handleChange}/>

					</Form.Group>

					<Form.Input name='major' label='Major' value={major}
					            onChange={this.handleChange}/>
					<Form.Input name='degree' label='Degree' value={degree}
					            onChange={this.handleChange}/>
					<Form.Checkbox name='visible' label='Make my account visible for everyone'
					               checked={visible} onChange={this.handleToggle} required/>

					<Form.Select fluid
					             name='job_type' label='What kind of job are you looking?' placeholder='Job type'
					             options={jobOptions} value={job_type} onChange={this.handleChange} required/>

					<Form.Select fluid
					             name='job_field' label='In what specific field are you planning to work?' placeholder='Job field'
					             options={jobFields} value={job_field} onChange={this.handleChange} required/>
					<Dropdown placeholder='Skills' fluid multiple selection name='skills'
					          options={skillOptions} value={skills} onChange={this.handleChange}/>

					<Message success>
						<Message.Header>Your profile was successfully updated</Message.Header>
					</Message>
					<Message error>
						<Message.Header>Unable to update</Message.Header>
						<p>{message}</p>
					</Message>
					<Form.Button primary content='Update'/>
				</Form>
			</div>
		);
	}
}

function mapStateToProps({user: {username, loading, details, error}}) {
	return {
		username,
		loading,
		details,
		message: error + ""
	};
}

const mapDispatchToProps = {
	getUserProfile,
	setUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
