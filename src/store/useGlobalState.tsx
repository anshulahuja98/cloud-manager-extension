import { useState, useEffect } from 'react';
import { callAPI } from '../utils';
import { V1Namespace, V1NamespaceList } from '../types/api';
import { NAV_ITEMS } from '../common/navItems';
import getAPIs from '../common/api';
import { useCookies } from 'react-cookie';
import { KubeContext } from '../types/config';

export const useGlobalState = () => {
	const [namespaceList, setNamespaceList] = useState<V1Namespace[]>([]);
	const [kubernetesAPIs, setKubernetesAPIs] = useState(getAPIs());
	const [cookies] = useCookies([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeNavEventKey, setActiveNavEventKey] = useState(NAV_ITEMS.NODES);
	const [contextList, setContextList] = useState<string[]>([]);
	const [activeContext, setActiveContext] = useState<KubeContext>(null);
	const [activeNamespace, setActiveNamespace] = useState<V1Namespace>(null);

	const resetGlobalState = () => {
		setLoading(true);
		setError(null);
		setNamespaceList([]);
		setActiveNamespace(null);
	};

	useEffect(() => {
		setContextList(cookies['contexts']);
		setActiveContext(cookies[cookies['current-context']]);
	}, [cookies]);

	useEffect(() => {
		if (!activeContext || !activeContext.server) return;
		resetGlobalState();
		callAPI(activeContext.server + kubernetesAPIs.NAMESPACE_LIST_API, {
			method: 'get',
			headers: new Headers({
				Authorization: `Bearer ${activeContext.token}`,
				Accept: 'application/json;v=v1;g=meta.k8s.io,application/json;v=v1beta1;g=meta.k8s.io,application/json',
			}),
		}).then((res: V1NamespaceList) => {
			setNamespaceList(res.items);
			setActiveNamespace(res.items[0]);
		});
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
		contextList,
		setContextList,
		activeContext,
		setActiveContext,
		error,
		setError,
		resetGlobalState,
	};
};
