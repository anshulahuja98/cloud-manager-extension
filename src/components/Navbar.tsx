import React = require('react');
import Nav from 'react-bootstrap/Nav';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { FaCloud, FaRocket } from 'react-icons/fa';

const Navbar = ({ activeNavKey, setActiveNavKey }) => (
	<Nav
		variant='pills'
		activeKey={activeNavKey}
		onSelect={(selectedKey) => setActiveNavKey(selectedKey)}
		className='flex-column p-0'>
		<Nav.Item>
			<Nav.Link eventKey='/home'>
				<FaCloud />
			</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link eventKey='/deployments'>
				<FaRocket />
			</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link eventKey='/pods'>
				<AiOutlineDeploymentUnit />
			</Nav.Link>
		</Nav.Item>
	</Nav>
);

export default Navbar;
