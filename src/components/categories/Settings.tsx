import React from 'react';
import { Form } from 'react-bootstrap';
import yaml from 'js-yaml';
import { useCookies } from 'react-cookie';

const Settings = () => {
	let fileReader = null;
	const [cookies, setCookie, removeCookie] = useCookies(['kubeconfig']);

	const resetCookies = () => {
		Object.keys(cookies).map((cookie) => {
			removeCookie(cookie);
		});
	};

	const handleSaveConfigCookie = (config) => {
		const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
		const cookieOptions = {
			path: '/',
			expires: nextYearDate,
		};
		const contextNames = [];
		config.contexts.forEach((contextObj) => {
			const context = contextObj.context;
			const contextName = contextObj.name;
			const clusterObj = config.clusters.filter((cluster) => cluster.name === context.cluster)[0];
			const userObj = config.users.filter((user) => user.name === context.user)[0];
			const contextData = {
				name: contextName,
				token: userObj.user.token ? userObj.user.token : null,
				server: clusterObj.cluster.server,
			};
			contextNames.push(contextName);
			setCookie(contextName, JSON.stringify(contextData), cookieOptions);
		});
		setCookie('contexts', JSON.stringify(contextNames), cookieOptions);
		setCookie('current-context', config['current-context'], cookieOptions);
		setCookie('apiVersion', config['apiVersion'], cookieOptions);
	};

	const handleFileRead = (e) => {
		const yamlCcontent = fileReader.result;
		try {
			let jsonContent = yaml.load(yamlCcontent);
			handleSaveConfigCookie(jsonContent);
		} catch (e) {
			console.log(e);
		}
	};

	const handleFileChosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		fileReader.readAsText(file);
	};

	const handleConfigFileUpload = (e) => {
		resetCookies();
		const file = e.target.files[0];
		handleFileChosen(file);
	};

	return (
		<>
			<h5 className='pt-2'>Settings</h5>
			<Form>
				<Form.File id='kube-config' label={'Kube Config Upload'} onChange={handleConfigFileUpload} custom />
			</Form>
		</>
	);
};
export default Settings;
