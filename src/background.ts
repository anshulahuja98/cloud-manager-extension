// This file is ran as a background script
console.log('Hello from background script!');

import { V1DeploymentList } from './types/model/v1DeploymentList';
import { callAPI } from './utils';

callAPI('/apis/apps/v1/deployments').then((data: V1DeploymentList) => {
	console.log(data);
});
