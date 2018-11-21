import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
	handleChange(e) {
		if (this.props.onChange)
			this.props.onChange(e);
	}

	render() {
		let {left, right, value, input} = this.props;
		return (
			<div className="toggle">
				<span>{left}</span>
				<label className="switch">
					<input {...input} onChange={this.handleChange.bind(this)} checked={value} type="checkbox"/>
					<span className="slider"/>
				</label>
				<span>{right}</span>
			</div>
		);
	}
}

Toggle.propTypes = {
	left: PropTypes.string,
	right: PropTypes.string,
	value: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Toggle
