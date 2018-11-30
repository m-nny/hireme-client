const defaultUserInfo = {
	'username': '',
	'fullname': '',
	'location': '',
	'education': {
		'university': '',
		'graduation': '',
		'major': '',
		'degree': ''
	},
	'hidden': false,
	'strong_skill': {
		'name': '',
		'description': ''
	},
	'urls': {
		'github': '',
		'linked_in': '',
		'web': '',
	},
	'skills': {},
	'employment': {
		'company': '',
		'role': '',
		'reference': {
			'name': '',
			'number': ''
		}
	},
	'avatar_url': '',
	'createdAt': '2012-04-23T18:25:43.511Z',
};

function normalize(values) {
	console.log(values);
	let details = Object.assign(defaultUserInfo, values);
	if (details.skills)
		details.skills = Object.keys(details.skills).filter(skill => details.skills[skill]).join('|');
	return details;
}

export {defaultUserInfo, normalize};
