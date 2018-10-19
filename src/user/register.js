import React from 'react'
import {Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import './user.css'
import {connect} from 'react-redux';
import {registerUser} from '../ducks/auth';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {fullname: '', password: '', email: '', username: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		// console.log(this.state);
		let {fullname, password, email, username} = this.state;
		let form = {fullname, password, email, username};
		console.log(form);
		this.props.registerUser(form).then(()=>this.props.history.push('/'));
	}

	handleChange(e, {name, value}) {
		// console.log('form[' + name + ']=' + value);
		this.setState({[name]: value});
	}

	render() {
		let {loadingUser} = this.props;
		return (
			<div className='register-form'>
				<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo-placeholder.png'/> Create new account
						</Header>
						<Form size='large' onSubmit={this.handleSubmit} loading={loadingUser}>
							<Segment stacked>
								<Form.Input fluid icon='address card' iconPosition='left'
								            name='fullname' placeholder='Full name'
								            onChange={this.handleChange}/>
								<Form.Input fluid icon='user' iconPosition='left'
								            name='username' placeholder='Username'
								            onChange={this.handleChange}/>
								<Form.Input fluid icon='mail' iconPosition='left'
								            name='email' placeholder='E-mail address'
								            onChange={this.handleChange}/>
								<Form.Input fluid icon='lock' iconPosition='left'
								            name='password' placeholder='Password'
								            type='password'
								            onChange={this.handleChange}/>

								<Form.Button color='teal' fluid size='large'>
									Register
								</Form.Button>
							</Segment>
						</Form>
						<Message>
							Already have an account? <a href='/login'>Login</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = ({auth: {loadingUser, user}}) => {
	return {
		loadingUser, user
	};
};

const mapDispatchToProps = {
	registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
