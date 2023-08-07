import React, { useEffect, useState } from 'react';
import ProductList from '../../shared/ProductList/ProductList';

function Home() {
	const [products, setProducts] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => {
				if (!response.ok) new Error('fetching failed');
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => console.error(error));
	}, []);

	if (loading) {
		return <h1>loading</h1>;
	}

	return (
		<>
			<h1>Wilkommen im Shop</h1>
			<ProductList products={products} />
		</>
	);
}

export default Home;
