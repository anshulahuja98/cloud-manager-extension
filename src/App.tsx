import * as React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
	const [activeNavKey, setActiveNavKey] = React.useState('/home');
	return (
		<Container fluid className='p-0' style={{ width: '480px', height: '480px' }}>
			<Row className='justify-content-center m-0 p-2 bg-primary text-light'>
				<h4 className='header'>AIO Cloud Management</h4>
			</Row>
			<Row className='m-0 h-100'>
				<div className='p-0 bg-secondary justify-content-center align-items-center flex-column'>
					<Navbar activeNavKey={activeNavKey} setActiveNavKey={setActiveNavKey} />
				</div>
				<Col className='bg-light'>
					<Container className='flex-column py-4'>
						<Content title='Home' />
						<Content title='Deployments' />
						<Content title='Pods' />
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
