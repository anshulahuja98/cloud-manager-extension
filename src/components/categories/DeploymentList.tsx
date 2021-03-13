import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useStore } from '../../store/useStore';
import { V1Deployment, V1DeploymentList } from '../../types/api';
import ContentList from '../base/ContentList';
import useAPI from '../hooks/useAPI';

const Deployment: React.FC<{ data: V1Deployment }> = ({ data }) => {
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

const DeploymentList: React.FC = () => {
	const { kubernetesAPIs } = useStore();
	const deploymentList = useAPI<V1DeploymentList>(kubernetesAPIs.DEPLOYMENT_LIST_API);

	return (
		<>
			{deploymentList !== null && deploymentList.items.length >= 0 ? (
				<ContentList
					list={deploymentList.items}
					title={'Deployments'}
					renderItem={({ data }) => <Deployment data={data} />}
				/>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default DeploymentList;
