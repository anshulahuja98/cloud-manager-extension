import React = require('react');
import { OverlayTrigger, Button } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import Nav from 'react-bootstrap/Nav';
import { AiFillSetting } from 'react-icons/ai';
import { MdEvent } from 'react-icons/md';
import { NAV_ITEMS } from '../common/navItems';
import nodeIcon from '../icons/node.png';
import podIcon from '../icons/pods.png';
import jobIcon from '../icons/job.png';
import serviceIcon from '../icons/service.png';
import deploymentIcon from '../icons/deployments.png';
import statefulsetIcon from '../icons/statefulset.png';
import daemonsetIcon from '../icons/daemonset.png';
import Icon from './base/Icon';

const NavItem: React.FC<{ eventKey }> = ({ children, eventKey }) => {
	return (
		<OverlayTrigger
			key={eventKey}
			placement={'right'}
			overlay={<Tooltip id={`tooltip-${eventKey}`}>{eventKey}</Tooltip>}>
			<Nav.Item>
				<Nav.Link eventKey={eventKey}>{children}</Nav.Link>
			</Nav.Item>
		</OverlayTrigger>
	);
};

const Navbar = ({ activeNavEventKey, setActiveNavEventKey }) => (
	<Nav variant='pills' className='flex-column p-0' activeKey={activeNavEventKey} onSelect={setActiveNavEventKey}>
		<NavItem eventKey={NAV_ITEMS.NODES}>
			<Icon src={nodeIcon} alt='Nodes' />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.PODS}>
			<Icon src={podIcon} alt='Pods' />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.EVENTS}>
			<MdEvent size={24} />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.SERVICES}>
			<Icon src={serviceIcon} alt='Services' />
		</NavItem>
		<div className='my-2 mx-2' style={{ borderBottom: '1px solid #dee2e6' }} />
		<NavItem eventKey={NAV_ITEMS.DEPLOYMENTS}>
			<Icon src={deploymentIcon} alt='Deployments' />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.DEAMONSETS}>
			<Icon src={daemonsetIcon} alt='DaeamonSets' />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.STATEFULSETS}>
			<Icon src={statefulsetIcon} alt='StatefulSets' />
		</NavItem>
		<div className='my-2 mx-2' style={{ borderBottom: '1px solid #dee2e6' }} />
		<NavItem eventKey={NAV_ITEMS.SETTINGS}>
			<AiFillSetting size={24} />
		</NavItem>
	</Nav>
);

export default Navbar;
