export const getKubernetesAPIs = (namespace?: string) => {
	const rootAPI = '/api/v1';
	const namespaceAPI = `/apis/apps/v1/namespaces/${namespace}`;
	return {
		DEPLOYMENT_LIST_API: `${namespaceAPI}/deployments`,  	//Type 1
		STATEFUL_SET_LIST_API: `${namespaceAPI}/statefulsets`,  //Type 1
		DAEMON_SET_LIST_API: `${namespaceAPI}/daemonsets`,      //Type 1
		// Replica Set
		POD_LIST_API: `${namespaceAPI}/pods`,                   //Type 1
		SERVICE_LIST_API: `${namespaceAPI}/services`,			//Type 2
		NODE_LIST_API: `${rootAPI}/nodes`,						//Type 2
		EVENT_LIST_API: `${rootAPI}/events`,					//Ignore for now
		NAMESPACE_LIST_API: `${rootAPI}/namespaces`,			//Fetch namespaces initially, no need to list separately
	};
};
