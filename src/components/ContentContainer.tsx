import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
import Content from './Content';

const ContentContainer = () => (
	<Tab.Content className='flex-column'>
		<Tab.Pane eventKey='home'>
			<Content title='Home' />
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
