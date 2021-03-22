import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import { callAPI } from '../../utils';

function useAPI<S>(api: string) {
	const [data, setData] = useState<S | null>(null);
	const { activeContext, setError } = useStore();

	useEffect(() => {
		setData(null);
		if (!activeContext) return;
		callAPI(activeContext.server + api, {
			method: 'get',
			headers: new Headers({
				Authorization: `Bearer ${activeContext.token}`,
				Accept: 'application/json;v=v1;g=meta.k8s.io,application/json;v=v1beta1;g=meta.k8s.io,application/json',
			}),
		})
			.then((res) => setData(res))
			.catch((err) => {
				setError(err);
				console.log(err)
			});
	}, [activeContext, api]);

	return data;
}

export default useAPI;
