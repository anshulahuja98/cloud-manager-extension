import React from 'react';
import { Row, Dropdown, DropdownButton, Col } from 'react-bootstrap';
import { V1Namespace } from '../types/api';
import { useStore } from '../store/useStore';
import { useCookies } from 'react-cookie';

const TopBar = () => {
	const {
		namespaceList,
		activeNamespace,
		setActiveNamespace,
		contextList,
		activeContext,
		setActiveContext,
	} = useStore();
	const [cookies] = useCookies([]);

	return (
		<>
			<Row className='justify-content-between align-items-center m-0 p-2 px-3 text-primary'>
				<h6 className='font-weight-bold m-0'>AIO Cloud Management</h6>
				<Row className='justify-content-end'>
					<DropdownButton
						menuAlign='right'
						id='dropdown-context'
						className='mr-2'
						title={activeContext === null ? 'Contexts' : activeContext.name}>
						{cookies && contextList && contextList.length > 0 ? (
							contextList.map((contextName: string) => (
								<Dropdown.Item
									eventKey={contextName}
									onSelect={() => setActiveContext(cookies[contextName])}>
									{contextName}
								</Dropdown.Item>
							))
						) : (
							<></>
						)}
					</DropdownButton>
					<DropdownButton
						menuAlign='right'
						id='dropdown-namespace'
						className='mr-2'
						title={activeNamespace === null ? 'Namespaces' : activeNamespace.metadata.name}>
						{namespaceList && namespaceList.length > 0 ? (
							namespaceList.map((namespace: V1Namespace) => (
								<Dropdown.Item
									eventKey={namespace.metadata.name}
									onSelect={() => setActiveNamespace(namespace)}>
									{namespace.metadata.name}
								</Dropdown.Item>
							))
						) : (
							<></>
						)}
					</DropdownButton>
				</Row>
			</Row>
		</>
	);
};
export default TopBar;
