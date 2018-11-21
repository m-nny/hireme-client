import React from 'react';

class Toggle extends React.Component {
	handleChange(e) {
		if (this.props.onChange)
			this.props.onChange(e);
	}

	render() {
		let {left, right, value} = this.props;
		return (
			<div className="toggle">
				<span>{left}</span>
				<label className="switch">
					<input onChange={this.handleChange.bind(this)} checked={value} type="checkbox"/>
					<span className="slider"/>
				</label>
				<span>{right}</span>
			</div>
		);
	}
}

export default Toggle
