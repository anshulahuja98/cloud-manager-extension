import * as React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import TabContainer from 'react-bootstrap/esm/TabContainer';
import ContentContainer from './components/ContentContainer';

const App = () => {
	return (
		// @ts-expect-error
		<TabContainer id='left-tabs' defaultActiveKey='home'>
			<Container fluid className='p-0' style={{ width: '480px', height: '480px' }}>
				<Row className='justify-content-center m-0 p-2 bg-primary text-light'>
					<h4 className='header'>AIO Cloud Management</h4>
				</Row>
				<Row className='m-0 h-100'>
					<div className='p-0 bg-secondary justify-content-center align-items-center flex-column'>
						<Navbar />
					</div>
					<Col className='bg-light py-2'>
						<ContentContainer />
					</Col>
				</Row>
			</Container>
		</TabContainer>
	);
};

export default App;
