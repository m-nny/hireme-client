import React from 'react';
import '../../styles/postCard.sass';

const PostCard = ({post: {id, title, text}}) => (
	<div className="post-card">
		<div className="post-title">{title}</div>
		<div className="post-content">{text}</div>
	</div>
);

export default PostCard;
