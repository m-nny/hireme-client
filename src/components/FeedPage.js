import React from 'react';
import '../styles/_feedpage.sass'
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {unauthenticated as signOutUser} from '../ducks/auth';
import {getFeed} from '../ducks/post';

import PostCard from './common/PostCard';

class FeedPage extends React.Component {
	constructor(props) {
		super(props);
		this.props.getFeed();
	}

	render() {
		let {posts} = this.props;
		return (
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				{/*<Header/>*/}
				<div className="NewPost">
					<form className="post_container">
						<input name="UserPost" type="text" placeholder="Share your news with followers"/>
						<div className="buttons">
							<button disabled>Attach Photo</button>
							<button>Post</button>
						</div>
					</form>

					{posts.map(post => <PostCard post={post} key={post.id}/>)}
				</div>
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

FeedPage = reduxForm({
	form: 'NewPost',
})(FeedPage);

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
