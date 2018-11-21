import React from 'react';
import {Link} from 'react-router-dom';

const RegistrationRoot = () => (
	<div className="registration-container">
		<label className="description">Who am I?</label>
		<Link to="/registration/student">Student</Link>
		<Link to="/registration/company">Company</Link>
	</div>
);

export default RegistrationRoot
