import * as React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import TabContainer from 'react-bootstrap/esm/TabContainer';
import ContentContainer from './components/ContentContainer';
import TopBar from './components/TopBar';
import { useStore } from './store/useStore';

const App = () => {
	const { updateNamespaceList, activeNavEventKey, setActiveNavEventKey } = useStore();

	React.useEffect(() => {
		updateNamespaceList();
		// TODO: Fix navbar not highlighting initially selected nav item
	}, []);

	return (
		// @ts-expect-error
		<TabContainer id='left-tabs' defaultActiveKey='home'>
			<Container fluid className='p-0' style={{ width: '480px', height: '480px' }}>
				<TopBar />
				<Row className='m-0 h-100'>
					<div className='p-0 justify-content-center align-items-center flex-column navbar-container'>
						<Navbar activeNavEventKey={activeNavEventKey} setActiveNavEventKey={setActiveNavEventKey} />
					</div>
					<Col className='pb-2 pr-2 pl-3'>
						<ContentContainer activeNavEventKey={activeNavEventKey} />
					</Col>
				</Row>
			</Container>
		</TabContainer>
	);
};

export default App;
