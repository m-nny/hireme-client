import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

import './app-header.css';
import {connect} from 'react-redux';
import {unauthenticated} from '../../ducks/auth';

class AppHeader extends Component {
	state = {activeItem: 'home'};

	handleItemClick = (e, {name}) => {
		if (name === 'logout') {
			this.props.signOutUser();
			return;
		}
		this.setState({activeItem: name});
		this.props.history.push('/' + (name === 'home' ? '' : name));
	};

	render() {
		const {activeItem} = this.state;
		let {authenticated, username} = this.props;
		let rightMenu;

		if (!authenticated) {
			rightMenu = (
				<Menu.Menu position='right'>
					<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
					<Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick}/>
				</Menu.Menu>
			);
		} else {
			rightMenu = (
				<Menu.Menu position='right'>
					<Menu.Item name={username}/>
					<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
				</Menu.Menu>
			);
		}
		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
				<Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
				{rightMenu}
			</Menu>
		)
	}
}

const mapStateToProps = ({auth: {authenticated}, user: {username}}) => {
	return {
		authenticated,
		username
	};
};

const mapDispatchToProps = {
	signOutUser: unauthenticated
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader));