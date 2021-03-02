// This file is ran as a background script
import {V1NamespaceList} from "./types/model/v1NamespaceList";

console.log('Hello from background script!');

import { V1DeploymentList } from './types/model/v1DeploymentList';
import { callAPI } from './utils';

callAPI('/apis/apps/v1/deployments').then((data: V1DeploymentList) => {
	console.log(data);
});
// /apis/apps/v1/namespaces/{namespace}/deployments
// /apis/apps/v1/namespaces/{namespace}/statefulsets 		V1StatefulSetList
// /apis/apps/v1/namespaces/{namespace}/daemonsets 		V1DaemonSetList
// /api/v1/namespaces/{namespace}/pods 		V1PodList
// /api/v1/namespaces/{namespace}/services 		V1ServiceList
// /api/v1/nodes		V1NodeList
// api/v1/events?limit=20 V1beta1EventList

callAPI('/apis/apps/v1/namespaces/kube-system/deployments').then((data: V1DeploymentList) => {
	console.log(data);
});

callAPI('/api/v1/namespaces').then((data: V1NamespaceList) => {
	console.log(data);
});



