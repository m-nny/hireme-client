import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import "./user.css"

class RegisterForm extends React.Component {
	render() {
		return (
			<div className='register-form'>
				{/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
				<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo-placeholder.png'/> Create new account
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='Full name'/>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

								<Button color='teal' fluid size='large'>
									Register
								</Button>
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

export default RegisterForm