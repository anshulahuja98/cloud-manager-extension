import React from 'react';
import { Form } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import yaml from 'js-yaml';
import { useCookies } from 'react-cookie';

const Settings = () => {
	const { config, setConfig } = useStore();
	let fileReader = null;
	const [cookies, setCookie, removeCookie] = useCookies(['kubeconfig']);

	const resetCookies = () => {
		Object.keys(cookies).map((cookie) => {
			removeCookie(cookie);
		});
	};

	const handleSaveConfigCookie = (config) => {
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
			setCookie(contextName, JSON.stringify(contextData), { path: '/' });
		});
		setCookie('contexts', JSON.stringify(contextNames), { path: '/' });
		setCookie('current-context', config['current-context'], { path: '/' });
		setCookie('apiVersion', config['apiVersion'], { path: '/' });
	};

	const handleFileRead = (e) => {
		const yamlCcontent = fileReader.result;
		try {
			let jsonContent = yaml.load(yamlCcontent);
			setConfig(jsonContent);
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
				<Form.File
					id='kube-config'
					label={config ? config.name : 'Kube Config Upload'}
					onChange={handleConfigFileUpload}
					custom
				/>
			</Form>
		</>
	);
};
export default Settings;
