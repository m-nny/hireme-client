import React from 'react';
import {connect} from 'react-redux';

import {unauthenticated as signOutUser} from '../ducks/auth';
import {getFeed} from '../ducks/post';
import PostCard from './common/PostCard';

import Image from './common/Image'

class FeedPage extends React.Component {
	constructor(props) {
		super(props);
		this.props.getFeed();
	}
	render() {
		let {posts} = this.props;
		return (
			<div>
				This is some fake news <br/>
				<button onClick={() => this.props.signOutUser()}>Sign out</button> <br/>
				<Image/>
				{posts.map(post => <PostCard post={post} key={post.id}/>)}
			</div>
		);
	}
}

function mapStateToProps({post: {posts}}) {
	return {
		posts
	}
}

const mapDispatchToProps = {
	getFeed,
	signOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
