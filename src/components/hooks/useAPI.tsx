import { useEffect, useState } from 'react';
import { callAPI } from '../../utils';

function useAPI<S>(api: string) {
	const [data, setData] = useState<S | null>(null);

	useEffect(() => {
		callAPI(api).then((res) => setData(res));
	}, []);

	return data;
}

export default useAPI;
