import * as React from 'react';
import { useEffect, useState } from 'react';
import { KubernetesAPITypes } from '../api/types';
import { callAPI } from '../utils';
import { getKubernetesAPIs } from '../api';
import ListGroup from 'react-bootstrap/ListGroup';
import { V1Namespace, V1NamespaceList } from '../types/api';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const NamespaceList = () => {
	const [kubernetesAPIs] = useState(getKubernetesAPIs());
	const [namespaceList, setNamespaceList] = useState([]);
	useEffect(() => {
		callAPI(kubernetesAPIs.NAMESPACE_LIST_API)
			.then((data: KubernetesAPITypes['NAMESPACE_LIST_API']) => {
				setNamespaceList(data.items);
			})
			.catch((err) => {
				console.error({ message: 'Problem with calling API', error: err });
			});
	}, []);

	console.log(namespaceList[0]);
	return (
		<>
			<h5>Namespaces</h5>
			<ListGroup variant='flush'>
				{namespaceList.length > 0 ? (
					namespaceList.map((namespace: V1Namespace) => {
						return (
							<ListGroup.Item action>
								<Row>
									<Col className='justify-content-end'>{namespace.metadata.name}</Col>
									<Col>{namespace.status.phase}</Col>
								</Row>
							</ListGroup.Item>
						);
					})
				) : (
					<></>
				)}
			</ListGroup>
		</>
	);
};

export default NamespaceList;
