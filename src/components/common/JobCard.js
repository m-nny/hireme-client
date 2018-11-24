import React from 'react';
import '../../styles/_jobcard.sass';

const JobCard = ({job: {company, position, responsibilities, qualifications, location}}) => (
	<div className='field-specs job-card'>
		<div className='company-name'>{company.name}</div>
		<div className="row">
			<div>Position:</div>
			<div>{position}</div>
		</div>
		<div className="row">
			<div>Responsibilities:</div>
			<div>{responsibilities}</div>
		</div>
		<div className="row">
			<div>Minimum Qualifications:</div>
			<div>{qualifications}</div>
		</div>
		<div className="row">
			<div>Location:</div>
			<div>{location}</div>
		</div>
		<button>Apply</button>
	</div>
);

export default JobCard;

