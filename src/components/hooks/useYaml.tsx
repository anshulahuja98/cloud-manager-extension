import useLocalStorage from './useLocalStorage';
import CryptoJS from 'crypto-js';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

function enc(plainText, key) {
	var b64 = CryptoJS.AES.encrypt(plainText, key).toString();
	var e64 = CryptoJS.enc.Base64.parse(b64);
	var eHex = e64.toString(CryptoJS.enc.Hex);
	return eHex;
}

function dec(cipherText, key) {
	var reb64 = CryptoJS.enc.Hex.parse(cipherText);
	var bytes = reb64.toString(CryptoJS.enc.Base64);
	var decrypt = CryptoJS.AES.decrypt(bytes, key);
	var plain = decrypt.toString(CryptoJS.enc.Utf8);
	return plain;
}

const useYaml = (key) => {
	const [yamlEncryptedFile, setYamlEncryptedFile] = useLocalStorage(key, null);
	const [cookies, setCookie, removeCookie] = useCookies([]);
	const [yamlContent, setYamlContent] = useState(null);

	const resetStorage = () => {
		setYamlEncryptedFile(null);
	};

	const saveYaml = (config, handleOnSave) => {
		const yamlEncryptionKey = nanoid();
		setCookie('temp', yamlEncryptionKey);
		var ciphertext = enc(config, yamlEncryptionKey);
		setYamlEncryptedFile(ciphertext);
		setYamlContent(yamlToJson(config));
		handleOnSave(config);
	};

	useEffect(() => {
		if (yamlEncryptedFile === null) return;
		const yamlEncryptionKey = cookies['temp'];
		const originalText = dec(yamlEncryptedFile, yamlEncryptionKey);
		setYamlContent(yamlToJson(originalText));
	}, [yamlEncryptedFile]);

	const yamlToJson = (yamlContent) => {
		try {
			let jsonContent = yaml.load(yamlContent);
			return jsonContent;
		} catch (e) {
			console.log(e);
		}
	};

	return { yaml: yamlContent, resetStorage, saveYaml, yamlToJson };
};

export default useYaml;
