import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Details() {
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState();
	const productId = useParams().productId;

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('feting Details failed');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setDetails(data);
				setLoading(false);
			})
			.catch((error) => console.error(error));
	}, []);

	if (loading) {
		return <h1>loading</h1>;
	}

	return (
		<article className='product'>
			<Link to={'/'}>Home</Link>
			<div className='image-wrapper'>
				<img
					src={details.image}
					alt=''
				/>
			</div>
			<div className='info'>
				<h2>{details.title}</h2>
				<p>{details.price} €</p>
				<p>{details.description}</p>
			</div>
		</article>
	);
}

export default Details;
