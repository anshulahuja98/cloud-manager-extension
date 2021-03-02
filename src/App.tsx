import * as React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCloud, FaRocket } from 'react-icons/fa';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';

const App = () => {
	const [activeNavKey, setActiveNavKey] = React.useState('/home');
	return (
		<Container fluid className='p-0' style={{ width: '480px', height: '480px' }}>
			<Row className='justify-content-center m-0 p-2 bg-primary text-light'>
				<h4 className='header'>AIO Cloud Management</h4>
			</Row>
			<Row className='m-0 h-100'>
				<div className='p-0 bg-secondary justify-content-center align-items-center flex-column'>
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
				</div>
				<Col className='bg-light'>
					<Container className='flex-column py-4'>
						<h3>Cloud Deployment</h3>
						<h3>Cloud Deployment</h3>
						<h3>Cloud Deployment</h3>
						<h3>Cloud Deployment</h3>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
