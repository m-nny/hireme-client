import React from 'react';
import '../../styles/JobCard.sass';

const SkillsetView = ({skills}) => (
	<div className="job-skillset">
		{!!skills && skills.map((skill, idx) => (
			<div className={'skill' + (!skill.selected ? ' disabled' : '')} key={idx}>{skill.name}</div>
		))}
	</div>
);

const JobCard = ({job: {role, description_of_responsibilities, skills}}) => (
	<div className='job-card'>
		<div className='job-role'>{role}</div>
		<div className='job-responsibilities'>{description_of_responsibilities}</div>
		<SkillsetView skills={skills.split('|').map((name, idx) => ({name, selected: idx % 2 === 1}))}/>
	</div>
);

export default JobCard;
