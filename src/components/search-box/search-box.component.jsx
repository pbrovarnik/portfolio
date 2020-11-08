import React from 'react';

const SearchBox = ({ placeholder, handleChange, handleKeyPress }) => (
	<input
		className='search-box'
		type='search'
		placeholder={placeholder}
		onChange={handleChange}
		onKeyPress={handleKeyPress}
	/>
);

export default SearchBox;
