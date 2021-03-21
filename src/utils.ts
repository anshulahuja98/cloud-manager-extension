export const callAPI = (api): Promise<any> => {
	// * Currently kubernetes proxy url is added here
	// const endpointURL = 'http://127.0.0.1:8001';
	return fetch(process.env.REACT_APP_API_ENDPOINT + api, {
		method: 'get',
		headers: new Headers({
			Authorization: process.env.REACT_APP_AUTHORIZATION_HEADER,
			Accept: 'application/json;v=v1;g=meta.k8s.io,application/json;v=v1beta1;g=meta.k8s.io,application/json',
		}),
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		});
};
