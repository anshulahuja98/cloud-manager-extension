import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1Service, V1ServiceList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const Service: React.FC<{ data: V1Service }> = ({ data }) => {
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

const ServiceList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const services = useAPI<V1ServiceList>(kubernetesAPIs.SERVICE_LIST_API);

	return (
		<>
			{services !== null && services.items.length >= 0 ? (
				<ContentList
					list={services.items}
					title={'Services'}
					renderItem={({ data }) => <Service data={data} />}
				/>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default ServiceList;
