import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1DaemonSet, V1DaemonSetList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const DaemonSet: React.FC<{ data: V1DaemonSet }> = ({ data }) => {
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

const DaemonSetList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const daemonSetList = useAPI<V1DaemonSetList>(kubernetesAPIs.DAEMON_SET_LIST_API);

	return (
		<>
			{daemonSetList !== null && daemonSetList.items.length >= 0 ? (
				<ContentList
					list={daemonSetList.items}
					title={'Daemon Sets'}
					renderItem={({ data }) => <DaemonSet data={data} />}
				/>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default DaemonSetList;
