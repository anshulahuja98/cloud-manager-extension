import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
import Content from './Content';
// import NamespaceList from './Namespaces';

const ContentContainer = () => (
	<Tab.Content className='flex-column'>
		<Tab.Pane eventKey='home'>
			{/* <NamespaceList /> */}
		</Tab.Pane>
		<Tab.Pane eventKey='deployments'>
			<Content title='Deployments' />
		</Tab.Pane>
		<Tab.Pane eventKey='pods'>
			<Content title='Pods' />
		</Tab.Pane>
	</Tab.Content>
);

export default ContentContainer;
