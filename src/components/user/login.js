import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux';

import {signInUser} from '../../ducks/auth';
import {getUserInfo} from '../../ducks/user';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {password: '', username: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		let {password, username} = this.state;
		let form = {password, username};
		// console.log(form);
		this.props.signInUser(form)
			.catch(error => console.log(error));
	}

	handleChange(e, {name, value}) {
		this.setState({[name]: value});
	}

	render() {
		let {loading, error} = this.props;
		return (
			<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
				<Grid.Column style={{maxWidth: 450}}>
					<Header as='h2' color='teal' textAlign='center'>
						<Image src='/logo-placeholder.png'/> Log-in to your account
					</Header>
					<Form size='large' loading={loading} onSubmit={this.handleSubmit} error={error !== ''}>
						<Segment stacked>
							<Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username'
							            onChange={this.handleChange}/>
							<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password'
							            onChange={this.handleChange}/>

							<Button color='teal' fluid size='large'>
								Login
							</Button>
							<Message error>
								<Message.Header>Unable to log in</Message.Header>
								<p>{error}</p>
							</Message>
						</Segment>
					</Form>
					<Message>
						New to us? <a href='/register'>Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}

const mapStateToProps = ({auth: {loading, error}}) => {
	return {
		loading, error
	};
};

const mapDispatchToProps = {
	signInUser,
	getUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
