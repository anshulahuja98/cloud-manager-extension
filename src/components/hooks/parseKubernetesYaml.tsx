export const getContexts = (config) => {
	const contextNames = [];
	const contexts = [];
	config.contexts.forEach((contextObj) => {
		const context = contextObj.context;
		const contextName = contextObj.name;
		const clusterObj = config.clusters.filter((cluster) => cluster.name === context.cluster)[0];
		const userObj = config.users.filter((user) => user.name === context.user)[0];
		const contextData = {
			name: contextName,
			token: userObj.user.token ? userObj.user.token : null,
			certificate: userObj.user['client-certificate'] ? userObj.user['client-certificate'] : null,
			key: userObj.user['client-key'] ? userObj.user['client-key'] : null,
			server: clusterObj.cluster.server,
		};
		contextNames.push(contextName);
		contexts[contextName] = contextData;
	});
	return { contexts, contextNames };
};
