export const callAPI = (api, options?): Promise<any> => {
	return fetch(api, options)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		});
};

export function readFile(file) {
	return new Promise((resolve, reject) => {
		const url = 'file:///' + file;
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'blob';
		request.onload = function () {
			var reader = new FileReader();
			reader.readAsDataURL(request.response);
			reader.onload = function (e) {
				console.log('DataURL:', e.target.result);
			};
		};
		request.send();
	});
}
