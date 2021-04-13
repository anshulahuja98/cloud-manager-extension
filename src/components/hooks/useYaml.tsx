import useLocalStorage from './useLocalStorage';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const useYaml = (key) => {
	const [yamlEncryptedFile, setYamlEncryptedFile] = useLocalStorage(key, null);
	const [cookies, setCookie, removeCookie] = useCookies([]);
	const [yaml, setYaml] = useState(null);

	const resetStorage = () => {
		setYamlEncryptedFile(null);
	};

	const saveYaml = (config, handleOnSave) => {
		resetStorage();
		const yamlEncryptionKey = nanoid();
		setCookie('temp', yamlEncryptionKey);
		var ciphertext = AES.encrypt(config, yamlEncryptionKey);
		setYamlEncryptedFile(ciphertext);
		setYaml(yaml);
		handleOnSave(config);
	};

	useEffect(() => {
		if (yamlEncryptedFile === null) return;
		const yamlEncryptionKey = cookies['temp'];
		var bytes = AES.decrypt(yamlEncryptedFile, yamlEncryptionKey);
		var originalText = bytes.toString(CryptoJS.enc.Utf8);
		setYaml(originalText);
	}, [yamlEncryptedFile]);

	const yamlToJson = (yamlContent) => {
		try {
			let jsonContent = yaml.load(yamlContent);
			return jsonContent;
		} catch (e) {
			console.log(e);
		}
	};

	return { yaml, resetStorage, saveYaml, yamlToJson };
};

export default useYaml;
