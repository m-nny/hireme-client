import React from 'react';
import '../../styles/JobCard.sass';

const JobCard = ({job: {role, description_of_responsibilities}}) => (
	<div className='job-card'>
		<div className='job-role'>{role}</div>
		<div className='job-responsibilities'>{description_of_responsibilities}</div>
	</div>
);

export default JobCard;

