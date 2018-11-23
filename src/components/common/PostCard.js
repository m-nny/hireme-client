import React from 'react';
import '../../styles/PostCard.sass';

const Author = ({author: {avatar, name}}) => (
	<div className="author row">
		{avatar && (avatar.length > 0) && <img className="author-avatar" src={avatar} alt=""/>}
		<div className="author-title">{name}</div>
	</div>
);

const PostCard = ({post: {id, company, author, text, photo_link}}) => (
	<div className="post-card">
		<Author author={author}/>
		<div className="post-content">{text}</div>
		{photo_link && <img className="post-photo" src={photo_link} alt=""/>}
	</div>
);

export default PostCard;
