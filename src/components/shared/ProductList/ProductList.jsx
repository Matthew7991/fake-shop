import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

function ProductList(props) {
	return (
		<section className='products'>
			{props.products.map((product) => (
				<ProductItem
					key={product.id}
					id={product.id}
					title={product.title}
					price={product.price}
					image={product.image}
				/>
			))}
		</section>
	);
}

export default ProductList;
