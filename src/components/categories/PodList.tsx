import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1Pod, V1PodList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const Pod: React.FC<{ data: V1Pod }> = ({ data }) => {
	return (
		<Container className='p-0'>
			<Row className='align-items-center'>
				<Col xs={6}>{data.metadata.name}</Col>
				<Col className='xs-auto'>{data.status.phase}</Col>
				<Col className='text-right'>
					<DropdownButton title='Labels' id='node-list' variant='secondary' size='sm'>
						{Object.keys(data.metadata.labels).map((key) => (
							<Dropdown.Item>
								{key} : {data.metadata.labels[key]}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</Col>
			</Row>
		</Container>
	);
};

const PodList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const podList = useAPI<V1PodList>(kubernetesAPIs.POD_LIST_API);

	return (
		<>
			{podList !== null && podList.items.length >= 0 ? (
				<ContentList list={podList.items} title={'Pods'} renderItem={({ data }) => <Pod data={data} />} />
			) : (
				'Loading...'
			)}
		</>
	);
};

export default PodList;
