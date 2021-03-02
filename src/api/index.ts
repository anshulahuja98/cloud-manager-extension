export const getKubernetesAPIs = (namespace?: string) => {
	const rootAPI = '/api/v1';
	const namespaceAPI = `/apis/apps/v1/namespaces/${namespace}`;
	return {
		DEPLOYMENT_LIST_API: `${namespaceAPI}/deployments`,
		STATEFUL_SET_LIST_API: `${namespaceAPI}/statefulsets`,
		DAEMON_SET_LIST_API: `${namespaceAPI}/daemonsets`,
		POD_LIST_API: `${namespaceAPI}/pods`,
		SERVICE_LIST_API: `${namespaceAPI}/services`,
		NODE_LIST_API: `${rootAPI}/nodes`,
		EVENT_LIST_API: `${rootAPI}/events`,
		NAMESPACE_LIST_API: `${rootAPI}/namespaces`,
	};
};
