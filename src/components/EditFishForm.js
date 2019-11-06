import React from "react";

class EditFishForm extends React.Component {
	handleChange = e => {
		// update that fish
		// 1. take copy of the current fish
		const updatedFish = {
			...this.props.fish,
			[e.currentTarget.name]: e.currentTarget.value
		};
		// 2. pass updated fish to state
		this.props.updateFish(this.props.index, updatedFish);
	};
	render() {
		return (
			<div className="fish-edit">
				<input
					name="name"
					onChange={this.handleChange}
					value={this.props.fish.name}
					type="text"
				/>
				<input
					name="price"
					onChange={this.handleChange}
					value={this.props.fish.price}
					type="text"
				/>
				<select
					name="status"
					onChange={this.handleChange}
					value={this.props.fish.status}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.fish.desc}
				/>
				<input
					name="image"
					onChange={this.handleChange}
					value={this.props.fish.image}
					type="text"
				/>
				<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
