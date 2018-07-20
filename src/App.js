import React, { Component } from 'react'
import Item from './components/Item'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: ['papuc', 'pisica', 'barza', 'varza', 'viezure', 'vizitiu'],
		}
	}

	handleRemove = (itemIdx, items) => {
		items.splice(itemIdx, 1)
		this.setState({ items })
	}

	renderItems = items => (
		<ul>
			{items.map((item, idx) => {
				const onRemove = () => this.handleRemove(idx, items)

				return <Item key={idx} item={item} onRemove={onRemove} />
			})}
		</ul>
	)

	render() {
		const { items } = this.state

		return (
			<div className="App">
				<h1>Remove an item:</h1>
				{this.renderItems(items)}
			</div>
		)
	}
}

export default App
