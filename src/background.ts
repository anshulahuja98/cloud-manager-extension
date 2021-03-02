import { callAPI } from './utils';
import { getKubernetesAPIs } from './api';
import { KubernetesAPITypes } from './api/types';

console.log('Hello from background script!');

const kubernetesAPIs = getKubernetesAPIs('kube-system');

callAPI(kubernetesAPIs.NAMESPACE_LIST_API)
	.then((data: KubernetesAPITypes['NAMESPACE_LIST_API']) => {
		console.log(data);
	})
	.catch((err) => {
		console.error({ message: 'Problem with calling API', error: err });
	});
