import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1beta1EventList, V1beta1Event } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const Event: React.FC<{ data: V1beta1Event }> = ({ data }) => {
	return (
		<Container className='p-0'>
			<Row className='align-items-center'>
				<Col>{data.metadata.name}</Col>
				<Col className='text-right'>
					{data.metadata && data.metadata.labels ? (
						<DropdownButton title='Labels' id='node-list' variant='secondary' size='sm'>
							{Object.keys(data.metadata.labels).map((key) => (
								<Dropdown.Item>
									{key} : {data.metadata.labels[key]}
								</Dropdown.Item>
							))}
						</DropdownButton>
					) : (
						<></>
					)}
				</Col>
			</Row>
		</Container>
	);
};

const EventList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const eventList = useAPI<V1beta1EventList>(kubernetesAPIs.EVENT_LIST_API);

	return (
		<>
			{eventList !== null && eventList.items.length >= 0 ? (
				<ContentList list={eventList.items} title={'Events'} renderItem={({ data }) => <Event data={data} />} />
			) : (
				'Loading...'
			)}
		</>
	);
};

export default EventList;
