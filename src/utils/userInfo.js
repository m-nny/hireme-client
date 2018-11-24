export function mapDetailsToState(details) {
	let {
		fullname,
		location,
		employment: {company, position},
		current_role,
		education: {
			university,
			graduation_year,
			graduation_month,
			major,
			degree
		},
		hidden,
		job_type,
		job_field,
		skills
	} = details;
	console.log('=>', details);
	skills = (skills || '').split('|');
	return {
		fullname,
		location,
		employment_company: company,
		employment_position: position,
		current_role,
		university,
		graduation_year,
		graduation_month,
		major,
		degree,
		visible: !hidden,
		job_type,
		job_field,
		skills
	};
}

export function mapStateToDetails(state) {
	let {
		fullname,
		location,
		employment_company: company,
		employment_position: position,
		current_role,
		university,
		graduation_year,
		graduation_month,
		major,
		degree,
		visible,
		job_type,
		job_field,
		skills
	} = state;
	console.log('<=', state);
	skills = skills.join('|');
	return {
		fullname,
		location,
		employment: {
			company,
			position
		},
		current_role,
		education: {
			university,
			graduation_year,
			graduation_month,
			major,
			degree,
		},
		hidden: !visible,
		job_type,
		job_field,
		skills
	};
}

export const jobOptions = [
	{key: 'f', text: 'Full-time', value: 'full_time'},
	{key: 'p', text: 'Part-time', value: 'part_time'},
	{key: 'c', text: 'Contractor', value: 'contractor'},
	{key: 'i', text: 'Intern', value: 'intern'},
];
export const jobFields = [
	{key: 'f', text: 'Frontend Developer', value: 'front'},
	{key: 'b', text: 'Backend Developer', value: 'back'},
	{key: 'w', text: 'Web Developer', value: 'full_stack'},
	{key: 'm', text: 'Mobile Developer', value: 'mobile'},
	{key: 't', text: 'Tester', value: 'tester'},
];
export const roleOptions = [
	{key: 'se', text: 'Software Engineer', value: 'software_engineer'},
	{key: 'de', text: 'Designer', value: 'designer'},
	{key: 'sl', text: 'Sales Manager', value: 'sales'},
	{key: 'te', text: 'Tester', value: 'Tester'},
];
export const skillOptions = [
	{key: 'angular', text: 'Angular', value: 'angular'},
	{key: 'css', text: 'CSS', value: 'css'},
	{key: 'design', text: 'Graphic Design', value: 'design'},
	{key: 'ember', text: 'Ember', value: 'ember'},
	{key: 'html', text: 'HTML', value: 'html'},
	{key: 'ia', text: 'Information Architecture', value: 'ia'},
	{key: 'javascript', text: 'Javascript', value: 'javascript'},
	{key: 'mech', text: 'Mechanical Engineering', value: 'mech'},
	{key: 'meteor', text: 'Meteor', value: 'meteor'},
	{key: 'node', text: 'NodeJS', value: 'node'},
	{key: 'plumbing', text: 'Plumbing', value: 'plumbing'},
	{key: 'python', text: 'Python', value: 'python'},
	{key: 'rails', text: 'Rails', value: 'rails'},
	{key: 'react', text: 'React', value: 'react'},
	{key: 'repair', text: 'Kitchen Repair', value: 'repair'},
	{key: 'ruby', text: 'Ruby', value: 'ruby'},
	{key: 'ui', text: 'UI Design', value: 'ui'},
	{key: 'ux', text: 'User Experience', value: 'ux'},
	{key: 'test', text: 'Testing', value: 'test'}
];
export const universityOptions = [
	{key: 'nu', text: 'Nazarbayev University', value: 'nu'},
	{key: 'iitu', text: 'International Information Technology University', value: 'iitu'},
	{key: 'kbtu', text: 'Kazakh-Britain Technical University', value: 'kbtu'},
];
