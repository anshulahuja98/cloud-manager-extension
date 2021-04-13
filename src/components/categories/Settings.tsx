import React from 'react';
import { Form } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import useYaml from '../hooks/useYaml';
import { getContexts } from '../hooks/parseKubernetesYaml';

const Settings = () => {
	let fileReader = null;
	const { yaml, saveYaml, yamlToJson } = useYaml('YAML_KEY');
	const { setActiveContext, setContextNamesList, setContexts } = useStore();

	const handleSaveConfigCookie = (config) => {
		saveYaml(config, (config) => {
			const { contexts, contextNames } = getContexts(config);
			setContextNamesList(contextNames);
			setContexts(contexts);
			setActiveContext(config[config['current-context']]);
		});
	};

	const handleFileRead = (e) => {
		const yamlContent = fileReader.result;
		try {
			const jsonContent = yamlToJson(yamlContent);
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
