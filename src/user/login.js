import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import './user.css'
import {connect} from 'react-redux';
import {authUser, getUser} from '../ducks/auth';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {password: '', username: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		// console.log(this.state);
		let {password, username} = this.state;
		let form = {password, username};
		console.log(form);
		this.props.getUser(username).then(() => {
			console.log(this.props.userInfo);
			let {userInfo} = this.props;
			if (userInfo != null && password === userInfo.password) {
				this.props.authUser(userInfo)
					// .then(()=>this.props.history.push('/'));
			}
		});
	}

	handleChange(e, {name, value}) {
		// console.log('form[' + name + ']=' + value);
		this.setState({[name]: value});
	}
	render() {
		let {userInfoLoading} = this.props;
		return (
			<div className='login-form'>
				<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo-placeholder.png'/> Log-in to your account
						</Header>
						<Form size='large' loading={userInfoLoading} onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username' onChange={this.handleChange}/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={this.handleChange}/>

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

const mapStateToProps = ({auth: {loadingUserInfo, userInfo}}) => {
	return {
		loadingUserInfo, userInfo
	};
};

const mapDispatchToProps = {
	getUser, authUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
