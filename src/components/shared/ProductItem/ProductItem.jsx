import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

function ProductItem(props) {
	return (
		<article className='product'>
			<div className='image-wrapper'>
				<img
					src={props.image}
					alt=''
				/>
			</div>
			<div className='info'>
				<h2>{props.title}</h2>
				<p>{props.price} €</p>
				<Link to={`/details/${props.id}`}>Open details page</Link>
			</div>
		</article>
	);
}

export default ProductItem;
