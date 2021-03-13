import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DaemonSetList from './categories/DaemonSetList';
import DeploymentList from './categories/DeploymentList';
import EventList from './categories/EventList';
import NodeList from './categories/NodeList';
import PodList from './categories/PodList';
import ServiceList from './categories/ServiceList';
import StatefulSetList from './categories/StatefulSetList';
import { NAV_ITEMS } from './navItems';

const ContentContainer = ({ activeNavEventKey }) => (
	<Tabs className='flex-column' activeKey={activeNavEventKey}>
		<Tab.Pane eventKey={NAV_ITEMS.NODES}>
			<NodeList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.EVENTS}>
			<EventList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.DEPLOYMENTS}>
			<DeploymentList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.PODS}>
			<PodList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.SERVICES}>
			<StatefulSetList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.DEAMONSETS}>
			<DaemonSetList />
		</Tab.Pane>
		<Tab.Pane eventKey={NAV_ITEMS.STATEFULSETS}>
			<ServiceList />
		</Tab.Pane>
	</Tabs>
);

export default ContentContainer;
