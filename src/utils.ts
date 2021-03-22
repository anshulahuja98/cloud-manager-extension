export const callAPI = (api, options?): Promise<any> => {
	return fetch(api, options)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		});
};
