import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import JobCard from './common/JobCard';
import PostCard from './common/PostCard';
import {createPost, getFeed} from '../ducks/post';
import {validatePost} from '../utils/validate';
import '../styles/_feedpage.sass'
import Header from './common/Header';

class FeedPage extends React.Component {
	constructor(props) {
		super(props);
		this.props.getFeed();
		this.submit = this.submit.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	submit(values) {
		let {user_id, createPost, reset, getFeed} = this.props;
		let post = Object.assign({
			company: false,
			author: user_id,
			title: '',
			photo_link: '',
			jobOfferIds: [],
		}, values);
		console.log(post);
		return createPost(post).then(() => getFeed()).then(() => reset());
	}

	render() {
		let {posts, handleSubmit, error, posting, anyTouched} = this.props;
		return (
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Header/>
				<div className="NewPost">
					<form className="post_container" onSubmit={handleSubmit(this.submit)}>
						<Field name="text" type="text" placeholder="Share your news with followers" component="textarea"/>
						<div className="buttons">
							<button onClick={this.onClickHandler}>Create Offer</button>
							<button disabled>Attach Photo</button>
							<button type="submit" disabled={posting}>Post</button>
						</div>
						{anyTouched && error && <div className="error"> {error} </div>}
					</form>
					{posts.map(post => post.jobOffers.length > 0 && <JobCard job={post.jobOffers[0]} key={post.id}/>)}
					{posts.map(post => <PostCard post={post} key={post.id}/>)}

				</div>
			</div>
		);

	}

	onClickHandler() {
		this.props.history.push('/create_offer');
		// console.log(`goto: $}`);
	}
}

function mapStateToProps({post: {posts, posting}, user: {id}}) {
	return {
		posts, user_id: id, posting
	}
}

const mapDispatchToProps = {
	getFeed,
	createPost,
};

FeedPage = reduxForm({
	form: 'NewPost',
	validate: validatePost,
})(FeedPage);

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
