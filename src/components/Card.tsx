import React from 'react';
import './Card.css';

interface Props {
	title?: string;
	featured?: boolean;
	children: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, featured, children }) => {
	return (
		<section className={`card ${featured ? 'featured' : ''}`}>
			{title && <h2 className="title">{title}</h2>}
			{children}
		</section>
	);
};

export default Card;
