import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			visitors: 0
		}
		this.increment = this.increment.bind(this)
	}
	increment() {
		this.setState({
			visitors: this.state.visitors + 1
		})
	}
	render() {
		return (
			<div>
				You are visitor number {this.state.visitors}.
				<button onClick={this.increment}>New Visitor!</button>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<header>
				<h1>Hi</h1>  
				<Counter />
			</header>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
