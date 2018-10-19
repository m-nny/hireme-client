import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux';

import './user.css'
import {signInUser} from '../ducks/auth';

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
		console.log(form);
		this.props.signInUser(form)
			.then(() => this.props.history.push('/'));
	}

	handleChange(e, {name, value}) {
		this.setState({[name]: value});
	}

	render() {
		let {loading} = this.props;
		return (
			<div className='login-form'>
				<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo-placeholder.png'/> Log-in to your account
						</Header>
						<Form size='large' loading={loading} onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username'
								            onChange={this.handleChange}/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password'
								            onChange={this.handleChange}/>

								<Button color='teal' fluid size='large'>
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <a href='/register'>Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = ({auth: {loading}}) => {
	return {
		loading
	};
};

const mapDispatchToProps = {
	signInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
