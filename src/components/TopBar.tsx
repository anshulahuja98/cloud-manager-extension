import * as React from 'react';
import { Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { V1Namespace } from '../types/api';
import { useStore } from '../store/useStore';

const TopBar = () => {
	const { namespaceList, activeNamespace, setActiveNamespace } = useStore();

    return (
		<>
			<Row className='justify-content-between align-items-center m-0 p-2 text-primary'>
				<h6 className='font-weight-bold m-0'>AIO Cloud Management</h6>
				<DropdownButton
					menuAlign='right'
					id='dropdown-namespace'
					title={activeNamespace === null ? 'Namespaces' : activeNamespace.metadata.name}
					activeKey={activeNamespace}>
					{namespaceList.length > 0 ? (
						namespaceList.map((namespace: V1Namespace) => {
							return (
								<Dropdown.Item eventKey={namespace} onSelect={() => setActiveNamespace(namespace)}>
									{namespace.metadata.name}
								</Dropdown.Item>
							);
						})
					) : (
						<></>
					)}
				</DropdownButton>
			</Row>
		</>
	);
};
export default TopBar;
