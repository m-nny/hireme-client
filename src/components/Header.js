import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/_header.sass'

class Header extends React.Component {
	render() {
		return (
			<div className="header row">
				<label className="logo">HireMe.kz</label>
				<div>
					<Link to="/feed">News</Link>
					<Link to="/profile">My Profile</Link>
					<Link to="/notifications">Notifications</Link>
					<Link to="/sign_out">Sign out</Link>
				</div>
			</div>
		)
	}
}

export default Header;
