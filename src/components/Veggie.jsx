import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./Items.styles";

import { motion } from "framer-motion";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Link } from "react-router-dom";

const Veggie = () => {
	const [veggie, setVeggie] = useState([]);

	const getVeggie = async () => {
		const check = sessionStorage.getItem("veggie");

		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`);
			const data = await api.json();

			sessionStorage.setItem("veggie", JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	useEffect(() => {
		getVeggie();
	}, []);

	return (
		<Wrapper>
			<h2>Our Vegetarian Picks</h2>

			<Splide
				options={{
					perPage: 3,
					arrows: true,
					pagination: false,
					gap: "5rem",
					breakpoints: {
						1024: {
							perPage: 3,
							gap: "3rem",
						},
						768: {
							perPage: 2,
							gap: "2rem",
						},
						640: {
							perPage: 1,
							gap: "1rem",
						},
					},
				}}
			>
				{veggie.map((recipe) => (
					<SplideSlide key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Card>
									<h3>{recipe.title}</h3>
									<img
										src={recipe.image}
										alt={recipe.title}
									/>
									<Gradient />
								</Card>
							</motion.div>
						</Link>
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	);
};

export default Veggie;
