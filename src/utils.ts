export const callAPI = (api): Promise<any> => {
	// * Currently kubernetes proxy url is added here
	const endpointURL = 'http://127.0.0.1:8001';
	return fetch(endpointURL + api)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
};
