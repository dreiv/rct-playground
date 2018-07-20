import React from 'react'
import './Item.css'

export default function Item({ item, onRemove }) {
	return (
		<div>
			{item} <button onClick={onRemove}>X</button>
		</div>
	)
}
