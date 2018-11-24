import React from 'react';
import '../../styles/JobCard.sass';
import {Column, Row} from 'simple-flexbox';

const JobCard = ({job: {company, position, responsibilities, qualifications, location}}) => (
	<div className='job-card'>
		<Column>
			<Row horizontal="center">
				<div className='company-name'>{company.name}</div>
			</Row>
			<Row horizontal="center">
				<Column className="Description">
					<div>Position:</div>
					<div>Responsibilities:</div>
					<div>Minimum Qualifications:</div>
					<div>Location:</div>
				</Column>
				<Column className="fields">
					<div className='position'>{position}</div>
					<div className='responsibilities'>{responsibilities}</div>
					<div className='qualifications'>{qualifications}</div>
					<div className='location'>{location}</div>
				</Column>
			</Row>
			<Row horizontal="center">
				<button>Apply</button>
			</Row>
		</Column>
	</div>
);

export default JobCard;

