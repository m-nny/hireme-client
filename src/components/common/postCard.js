import React from 'react';
import '../../styles/PostCard.sass';
import JobCard from './JobCard';

const PostCard = ({post: {id, title, text, jobOffers}}) => (
	<div className="post-card">
		<div className="post-title">{title}</div>
		<div className="post-content">{text}</div>
		<div className="job-section">
			{jobOffers.map(job => <JobCard job={job} key={job.id}/>)}
		</div>
	</div>
);

export default PostCard;
