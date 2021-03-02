import {
	V1DeploymentList,
	V1StatefulSetList,
	V1DaemonSetList,
	V1PodList,
	V1ServiceList,
	V1NodeList,
	V1beta1EventList,
	V1NamespaceList,
} from '../types/api';

export type KubernetesAPITypes = {
	DEPLOYMENT_LIST_API: V1DeploymentList;
	STATEFUL_SET_LIST_API: V1StatefulSetList;
	DAEMON_SET_LIST_API: V1DaemonSetList;
	POD_LIST_API: V1PodList;
	SERVICE_LIST_API: V1ServiceList;
	NODE_LIST_API: V1NodeList;
	EVENT_LIST_API: V1beta1EventList;
	NAMESPACE_LIST_API: V1NamespaceList;
};
