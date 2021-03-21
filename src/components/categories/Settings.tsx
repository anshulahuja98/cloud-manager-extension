import React from 'react';
import { Form } from 'react-bootstrap';
import { useStore } from '../../store/useStore';

const Settings = () => {
	const { config, setConfig } = useStore();
	let fileReader = null;

	const handleFileRead = (e) => {
		const content = fileReader.result;
		console.log(content);
		setConfig(content);
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
