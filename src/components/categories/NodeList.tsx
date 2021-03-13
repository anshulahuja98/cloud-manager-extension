import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1Node, V1NodeList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

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
	const nodeList = useAPI<V1NodeList>(kubernetesAPIs.NODE_LIST_API);
	return (
		<>
			{nodeList !== null ? (
				<ContentList list={nodeList.items} title={'Nodes'} renderItem={({ data }) => <Node node={data} />} />
			) : (
				'Loading...'
			)}
		</>
	);
};

export default NodeList;
