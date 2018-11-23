function validateLogin(values) {
	const errors = {};
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.password || values.password.length === 0) {
		errors.password = 'Required'
	}
	return errors
}

function validateRegister(values) {
	const errors = {};
	if (!values.fullname || values.fullname.length === 0) {
		errors.fullname = 'Required'
	}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.password || values.password.length === 0) {
		errors.password = 'Required'
	} else if (values.password.length < 6) {
		errors.password = 'Must be at least 6 characters long'
	}
	if (!values.email || values.email.length === 0) {
		errors.email = 'Required'
	} else if (!values.email.endsWith('@nu.edu.kz')) {
		errors.email = 'Use NU email'
	}
	if (!values.agreement) {
		errors.agreement = 'You must accept terms of conditions'
	}
	return errors
}

function validatePost(values) {
	const errors = {};
	if (!values.text || values.text.length === 0) {
		errors._error = 'Text cannot be empty';
	}
	return errors;
}

export {
	validateLogin,
	validateRegister,
	validatePost,
};
