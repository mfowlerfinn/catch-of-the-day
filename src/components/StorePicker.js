import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();



	goToStore = (e) => {
		e.preventDefault(); // 1. stop form from submitting
		// 2. get the text from the input (use REF or STATE
		const storeName = this.myInput.current.value
		// 3. change the page to new URL
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		return (
			<>
			{/* comment --- curly braces mean to jump from JSX to JS*/}
			<form action="" className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input 
					type="text"
					ref={this.myInput}
					required
					placeholder="Store Name" 
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store </button>
			</form>
			</>
		)
	}
}

export default StorePicker;