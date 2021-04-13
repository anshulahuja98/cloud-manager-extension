import React = require('react');

const Icon = ({ src, alt }) => {
	const size = 24;
	return <img src={src} alt={alt} style={{ width: size, height: size }} />;
};

export default Icon;
