import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1StatefulSet, V1StatefulSetList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const StatefulSet: React.FC<{ data: V1StatefulSet }> = ({ data }) => {
	return (
		<Container className='p-0'>
			<Row className='align-items-center'>
				<Col>{data.metadata.name}</Col>
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

const StatefulSetList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const statefulSetList = useAPI<V1StatefulSetList>(kubernetesAPIs.STATEFUL_SET_LIST_API);

	return (
		<>
			{statefulSetList !== null && statefulSetList.items.length >= 0 ? (
				<ContentList
					list={statefulSetList.items}
					title={'Stateful Sets'}
					renderItem={({ data }) => <StatefulSet data={data} />}
				/>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default StatefulSetList;
