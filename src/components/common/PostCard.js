import React from 'react';
import '../../styles/PostCard.sass';
import JobCard from './JobCard';

const PostCard = ({post: {id, company, author, text, photo_link, jobOffers}}) => (
	<div className="post-card">
		<div className="author-title">{author.name}</div>
		<div className="post-content">{text}</div>
		<img src="photo-link"></img>
		<div className="job-section">
			{jobOffers.map(job => <JobCard job={job} key={job.id}/>)}
		</div>
	</div>
);

export default PostCard;
