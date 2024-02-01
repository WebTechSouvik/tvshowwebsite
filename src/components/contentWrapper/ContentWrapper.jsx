import React from 'react'
import "./style.css"

const ContentWrapper = ({children}) => {
	return (
		<div className="ContentWrapper">
			{children}
		</div>
	)
}

export default ContentWrapper