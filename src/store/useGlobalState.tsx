import { useState, useEffect } from 'react';
import { callAPI, readFile } from '../utils';
import { V1Namespace, V1NamespaceList } from '../types/api';
import { NAV_ITEMS } from '../common/navItems';
import getAPIs from '../common/api';
import { KubeContext } from '../types/config';
import useYaml from '../components/hooks/useYaml';
import { getContexts } from '../components/hooks/parseKubernetesYaml';
import fs from 'fs';

export const useGlobalState = () => {
	const [namespaceList, setNamespaceList] = useState<V1Namespace[]>([]);
	const [kubernetesAPIs, setKubernetesAPIs] = useState(getAPIs());
	const { yaml: config } = useYaml('YAML_KEY');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeNavEventKey, setActiveNavEventKey] = useState(NAV_ITEMS.NODES);
	const [contextNamesList, setContextNamesList] = useState<string[]>([]);
	const [contexts, setContexts] = useState<KubeContext[]>([]);
	const [activeContext, setActiveContext] = useState<KubeContext>(null);
	const [activeNamespace, setActiveNamespace] = useState<V1Namespace>(null);

	const resetGlobalState = () => {
		setLoading(true);
		setError(null);
		setNamespaceList([]);
		setActiveNamespace(null);
	};

	useEffect(() => {
		if (!config) return;
		const { contexts, contextNames } = getContexts(config);
		setContextNamesList(contextNames);
		setContexts(contexts);
		setActiveContext(config['current-context']);
	}, [config]);

	useEffect(() => {
		if (!activeContext || !activeContext.server) return;
		resetGlobalState();
		const call = async () => {
			// const key = await readFile(activeContext.key);
			// const cert = await readFile(activeContext.cert);
			const keyCertOptions =
				activeContext.key && activeContext.cert
					? {
							key: activeContext.key,
							cert: activeContext.cert,
					  }
					: {};
			const headers = activeContext.token
				? new Headers({
						Authorization: `Bearer ${activeContext.token}`,
						Accept: 'application/json;v=v1;g=meta.k8s.io,application/json;v=v1beta1;g=meta.k8s.io,application/json',
				  })
				: new Headers({
						Accept: 'application/json;v=v1;g=meta.k8s.io,application/json;v=v1beta1;g=meta.k8s.io,application/json',
				  });
			callAPI(activeContext.server + kubernetesAPIs.NAMESPACE_LIST_API, {
				method: 'get',
				...keyCertOptions,
				headers,
			}).then((res: V1NamespaceList) => {
				setNamespaceList(res.items);
				setActiveNamespace(res.items[0]);
			});
		};
		call();
	}, [activeContext]);

	useEffect(() => {
		if (activeNamespace) setKubernetesAPIs(getAPIs(activeNamespace.metadata.name));
	}, [activeNamespace]);

	return {
		namespaceList,
		activeNamespace,
		loading,
		kubernetesAPIs,
		setActiveNamespace,
		activeNavEventKey,
		setActiveNavEventKey,
		contextNamesList,
		setContextNamesList,
		activeContext,
		setActiveContext,
		error,
		contexts,
		setContexts,
		setError,
		resetGlobalState,
	};
};
