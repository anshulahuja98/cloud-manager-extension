import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ContentList: React.FC<{ list: any[]; title: string; renderItem: ({ data }) => React.ReactNode }> = ({
	list,
	title,
	renderItem,
}) => {
	return (
		<>
			<h5 className='pt-2'>{title}</h5>
			<ListGroup>
				{list.map((data) => (
					<ListGroup.Item className='px-3'>{renderItem({ data })}</ListGroup.Item>
				))}
			</ListGroup>
		</>
	);
};

export default ContentList;
