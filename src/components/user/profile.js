import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		let {id, fullname, username} = this.props;
		this.state = {
			id, fullname, username,
			location: '',
			employment_position: '',
			employment_company: ''
		};
		console.log(id, fullname, username);
	}

	render() {
		let {fullname, username, location, employment_company, employment_position} = this.state;
		return (
			<div>
				<Form>
					<Form.Input name='username' label='Username' value={username} disabled/>
					<Form.Input name='fullname' label='Full name' placeholder='Full name' value={fullname}
					            onChange={this.handleChange} required/>
					<Form.Input name='location' label='Location' value={location}
					            onChange={this.handleChange} required/>
					<Form.Group>
						<Form.Input name='employment_position' label='Employment Position' value={employment_position}
						            onChange={this.handleChange}/>
						<Form.Input name='employment_company' label='Employment Company' value={employment_company}
						            onChange={this.handleChange}/>
					</Form.Group>
				</Form>
			</div>
		);
	}

	handleChange = (e, {name, value}) => this.setState({[name]: value})
}

function mapStateToProps({user}) {
	return user;
}

export default connect(mapStateToProps)(Profile);