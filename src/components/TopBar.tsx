import React from 'react';
import { Row, Dropdown, DropdownButton, Col } from 'react-bootstrap';
import { V1Namespace } from '../types/api';
import { useStore } from '../store/useStore';

const TopBar = () => {
	const {
		namespaceList,
		activeNamespace,
		setActiveNamespace,
		contextNamesList,
		activeContext,
		setActiveContext,
		contexts,
	} = useStore();

	return (
		<>
			<Row className='justify-content-between align-items-center m-0 p-2 px-3 text-primary'>
				<h6 className='font-weight-bold m-0'>AIO Cloud Management</h6>
				<Row className='justify-content-end'>
					<DropdownButton
						menuAlign='right'
						id='dropdown-context'
						className='mr-2'
						title={activeContext === undefined || activeContext === null ? 'Contexts' : activeContext.name}>
						{contextNamesList && contextNamesList.length > 0 ? (
							contextNamesList.map((contextName: string) => (
								<Dropdown.Item
									eventKey={contextName}
									onSelect={() => setActiveContext(contexts[contextName])}>
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
