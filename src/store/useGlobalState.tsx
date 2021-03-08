import { useState, useMemo } from "react";
import { callAPI } from "../utils";
import { V1Namespace, V1NamespaceList } from '../types/api';
import { NAV_ITEMS } from "../components/navItems";

export const useGlobalState = () => {
    const [namespaceList, setNamespaceList] = useState<V1Namespace[]>([]);
    const [activeNamespace, setActiveNamespace] = useState<V1Namespace>(null);
    const [kubernetesAPIs] = useState(
        {
            DEPLOYMENT_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/deployments`,
            STATEFUL_SET_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/statefulsets`,
            DAEMON_SET_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/daemonsets`,
            POD_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/pods`,
            SERVICE_LIST_API: `/apis/apps/v1/namespaces/${activeNamespace}/services`,
            NODE_LIST_API: `/api/v1/nodes`,
            EVENT_LIST_API: `/api/v1/events`,
            NAMESPACE_LIST_API: `/api/v1/namespaces`,
        }
    );
    const [activeNavEventKey, setActiveNavEventKey] = useState(NAV_ITEMS.NODES);
    const [loading, setLoading] = useState(true);

    const updateNamespaceList = useMemo(
        () => () => {
            setLoading(true);
            callAPI(kubernetesAPIs.NAMESPACE_LIST_API)
                .then((data: V1NamespaceList) => {
                    setNamespaceList(data.items);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error({ message: 'Problem with calling API', error: err });
                });
        }, [setLoading]
    )

    return {
        namespaceList,
        activeNamespace,
        loading,
        kubernetesAPIs,
        updateNamespaceList,
        setActiveNamespace,
        activeNavEventKey,
        setActiveNavEventKey
    };
};