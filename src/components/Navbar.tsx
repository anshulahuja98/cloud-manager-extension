import React = require('react');
import { OverlayTrigger, Button } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import Nav from 'react-bootstrap/Nav';
import { AiFillSetting, AiFillSkype, AiOutlineCloudServer, AiOutlineCloudUpload, AiOutlineDeploymentUnit } from 'react-icons/ai';
import { FaCloud, FaCloudUploadAlt, FaRocket } from 'react-icons/fa';
import { NAV_ITEMS } from '../common/navItems';

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
			<FaCloud />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.PODS}>
			<FaRocket />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.EVENTS}>
			<FaCloudUploadAlt />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.SERVICES}>
			<AiOutlineCloudUpload />
		</NavItem>
		<div className='my-2 mx-2' style={{ borderBottom: '1px solid #dee2e6' }} />
		<NavItem eventKey={NAV_ITEMS.DEPLOYMENTS}>
			<AiOutlineDeploymentUnit />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.DEAMONSETS}>
			<AiFillSkype />
		</NavItem>
		<NavItem eventKey={NAV_ITEMS.STATEFULSETS}>
			<AiOutlineCloudServer />
		</NavItem>
		<div className='my-2 mx-2' style={{ borderBottom: '1px solid #dee2e6' }} />
		<NavItem eventKey={NAV_ITEMS.SETTINGS}>
			<AiFillSetting />
		</NavItem>
	</Nav>
);

export default Navbar;
