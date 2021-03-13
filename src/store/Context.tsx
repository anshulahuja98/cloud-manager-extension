import React from 'react';
import { NAV_ITEMS } from '../components/navItems';
import { V1Namespace } from '../types/api';

export const Context = React.createContext<{
	namespaceList: V1Namespace[];
	activeNamespace: V1Namespace;
	loading: boolean;
	kubernetesAPIs: {
		DEPLOYMENT_LIST_API: string;
		STATEFUL_SET_LIST_API: string;
		DAEMON_SET_LIST_API: string;
		POD_LIST_API: string;
		SERVICE_LIST_API: string;
		NODE_LIST_API: string;
		EVENT_LIST_API: string;
		NAMESPACE_LIST_API: string;
	};
	activeNavEventKey: string;
	setActiveNavEventKey: (eventKey: NAV_ITEMS) => void;
	setActiveNamespace: (namespace: V1Namespace) => void;
	updateNamespaceList: () => void;
}>(null);