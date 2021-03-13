import { useState, useMemo, useEffect } from 'react';
import { callAPI } from '../utils';
import { V1Namespace, V1NamespaceList } from '../types/api';
import { NAV_ITEMS } from '../components/navItems';
import getAPIs from '../common/api';

export const useGlobalState = () => {
	const [namespaceList, setNamespaceList] = useState<V1Namespace[]>([]);
	const [activeNamespace, setActiveNamespace] = useState<V1Namespace>(null);
	const [kubernetesAPIs, setKubernetesAPIs] = useState(getAPIs());
	const [activeNavEventKey, setActiveNavEventKey] = useState(NAV_ITEMS.NODES);
	const [loading, setLoading] = useState(true);

	const updateNamespaceList = useMemo(
		() => () => {
			setLoading(true);
			callAPI(kubernetesAPIs.NAMESPACE_LIST_API)
				.then((data: V1NamespaceList) => {
					setNamespaceList(data.items);
					setActiveNamespace(data.items[0]);
					setLoading(false);
				})
				.catch((err) => {
					console.error({ message: 'Problem with calling API', error: err });
				});
		},
		[setLoading]
	);

	useEffect(() => {
		if (activeNamespace !== null) setKubernetesAPIs(getAPIs(activeNamespace.metadata.name));
	}, [activeNamespace]);

	return {
		namespaceList,
		activeNamespace,
		loading,
		kubernetesAPIs,
		updateNamespaceList,
		setActiveNamespace,
		activeNavEventKey,
		setActiveNavEventKey,
	};
};
