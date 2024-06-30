import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const Recipe = () => {
	let params = useParams();
	const [recipe, setRecipe] = useState({});
	const [activeTab, setActiveTab] = useState("ingredients");

	const getRecipe = async () => {
		const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setRecipe(data);
		console.log(data);
	};

	useEffect(() => {
		getRecipe();
		// eslint-disable-next-line
	}, [params.name]);

	return (
		<DetailWrapper>
			<div className="recimg">
				<h2>{recipe.title}</h2>
				<img
					src={recipe.image}
					alt={recipe.title}
				/>
			</div>
			<Info className="recinfo">
				<Button
					className={activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}
				>
					Ingredients
				</Button>
				<Button
					className={activeTab === "instructions" ? "active" : ""}
					onClick={() => setActiveTab("instructions")}
				>
					Instructions
				</Button>
				{activeTab === "ingredients" && (
					<ul>
						{recipe.extendedIngredients?.map((ingredient, index) => {
							return <li key={index}>{ingredient.original}</li>;
						})}
					</ul>
				)}

				{activeTab === "instructions" && (
					<div>
						<h3
							dangerouslySetInnerHTML={{ __html: recipe.instructions }}
							style={{ margin: "2rem 0" }}
						/>

						<h5 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
					</div>
				)}
			</Info>
		</DetailWrapper>
	);
};

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 80%;
	margin: 2rem auto;

	.recimg {
		flex: 1;
	}

	.recinfo {
		flex: 1.5;
	}

	.active {
		background: linear-gradient(4deg, #20292f, #20292f, #20292f, #cdcde0);
		color: #f0f8ff;
	}

	h2 {
		margin-bottom: 2rem;
		font-size: 1.25rem;
		color: #f0f8ff;
		text-align: center;

		@media (max-width: 500px) {
			font-size: 1.25rem;
			text-align: center;
		}
	}

	img {
		border-radius: 15px;
		object-fit: contain;
	}

	li {
		font-size: 1.1rem;
		line-height: 1.5rem;
	}

	ul {
		margin-top: 2rem;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;

		.recimg {
			margin-bottom: 2rem;
			display: flex;
			flex-direction: column;
		}
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #0f0800;
	background: #f0f8ff;
	border: 2px solid #000;
	margin-right: 2rem;
	font-weight: 600;
	cursor: pointer;

	@media (max-width: 500px) {
		padding: 0.5rem 0.8rem;
		font-size: 0.8rem;
		margin-right: 0.8rem;
	}
`;

const Info = styled.div`
	margin-left: 10rem;
	color: #dbdbef;

	@media (max-width: 1200px) {
		margin-left: 0;
	}
`;

export default Recipe;
