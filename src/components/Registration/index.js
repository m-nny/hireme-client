import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/_registration_form.sass';

const RegistrationRoot = () => (
	<div className="registration-container">
		<label className="whoami">$ whoami</label>
		<Link to="/registration/student">Student</Link>
		<Link to="/registration/company">Company</Link>
	</div>
);

export default RegistrationRoot
