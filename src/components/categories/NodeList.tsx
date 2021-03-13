import React from 'react';
import { useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, ListGroup, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1Node, V1NodeList } from '../../types/api';
import { callAPI } from '../../utils';

const Node: React.FC<{ node: V1Node }> = ({ node }) => {
	return (
		<Container className='p-0'>
			<Row className='align-items-center'>
				<Col>{node.metadata.name}</Col>
				<Col className='text-right'>
					<DropdownButton title='Labels' id='node-list' variant='secondary' size='sm'>
						{Object.keys(node.metadata.labels).map((key) => (
							<Dropdown.Item>
								{key} : {node.metadata.labels[key]}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</Col>
			</Row>
		</Container>
	);
};

const NodeList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const [nodeList, setNodeList] = useState<V1Node[]>([]);

	React.useEffect(() => {
		callAPI(kubernetesAPIs.NODE_LIST_API).then((nodeList: V1NodeList) => setNodeList(nodeList.items));
	}, []);

	return (
		<>
			<h5 className='pt-2'>Nodes</h5>
			<ListGroup>
				{nodeList.map((node: V1Node) => (
					<ListGroup.Item className='px-3'>
						<Node node={node} />
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

export default NodeList;
