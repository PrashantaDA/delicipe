import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./Items.styles";
import { motion } from "framer-motion";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Link } from "react-router-dom";

const Popular = () => {
	const [popular, setPopular] = useState([]);

	const getPopular = async () => {
		const check = sessionStorage.getItem("popular");

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`);
			const data = await api.json();

			sessionStorage.setItem("popular", JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	};

	useEffect(() => {
		getPopular();
	}, []);

	return (
		<Wrapper>
			<h2>Popular Picks</h2>

			<Splide
				options={{
					perPage: 4,

					arrows: true,
					pagination: false,
					gap: "5rem",
					breakpoints: {
						1200: {
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
				{popular.map((recipe) => (
					<SplideSlide key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
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

export default Popular;
