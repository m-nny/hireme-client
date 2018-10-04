import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {withRouter} from "react-router-dom";

import './app-header.css';

class AppHeader extends Component {
	state = {activeItem: 'home'};

	handleItemClick = (e, {name}) => {
		this.setState({activeItem: name});
		this.props.history.push('/' + (name === 'home' ? "" : name));
	};

	render() {
		const {activeItem} = this.state;

		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
				<Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
				<Menu.Menu position='right'>
					<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
				</Menu.Menu>
			</Menu>
		)
	}
}

export default withRouter(AppHeader);