import React from 'react';
import ReactJson from 'react-json-view';

const Error: React.FC<{ error: null | string | object }> = ({ error }) => {
	if (!error) return <></>;
	if (typeof error == 'string') return <h3>{error}</h3>;
	if (typeof error == 'object') {
		try {
			// @ts-expect-error
			const testIfJson = JSON.parse(error);
			if (typeof testIfJson == 'object') {
				return <ReactJson src={error} />;
			}
		} catch (err) {
			return <h3>{error.toString()} </h3>;
		}
	}
	return <h3>Error occured: Check console for further details</h3>;
};

export default Error;
