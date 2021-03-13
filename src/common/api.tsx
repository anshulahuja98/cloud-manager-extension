const getAPIs = (activeNamespace?: string) => {
	return {
		DEPLOYMENT_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/deployments`,
		STATEFUL_SET_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/statefulsets`,
		DAEMON_SET_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/daemonsets`,
		SERVICE_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/services`,
		POD_LIST_API: `/api/v1/pods`,
		NODE_LIST_API: `/api/v1/nodes`,
		EVENT_LIST_API: `/api/v1/events`,
		NAMESPACE_LIST_API: `/api/v1/namespaces`,
	};
};

export default getAPIs;
