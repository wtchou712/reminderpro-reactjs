import React, { Component } from 'react';
import '../App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	render(){
		return (
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="I have to..."
							onChange={event =>this.setState({text: event.target.value})}
						/>
					</div>
					<button
						type='button'
						className='btn btn-success'
					>
						Add Reminder
					</button>
				</div>
			</div> 
		)
	}
}

export default App; 