import React from 'react';

const SearchBox = ({ placeholder, handleChange, handleKeyPress }) => (
	<input
		type='search'
		placeholder={placeholder}
		onChange={handleChange}
		onKeyPress={handleKeyPress}
	/>
);

export default SearchBox;
