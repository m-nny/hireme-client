import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import '../../styles/_header.sass'

class Header extends React.Component {
	render() {
		let {history} = this.props;
		if (['/', '/login', '/register'].includes(history.location.pathname)) {
			return null;
		}
		return (
			<div className="row header">
				<label className="logo"><Link to="/feed">HireMe.kz</Link> </label>
				<div>
					<Link to="/feed">News</Link>
					<Link to="/profile">My Profile</Link>
					<Link to="/company">My Company</Link>
					<Link to="/notifications">Notifications</Link>
					<Link to="/sign_out">Sign out</Link>
				</div>
			</div>
		)
	}
}

Header = withRouter(Header);

export default Header;
