import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Component Styles

export const Wrapper = styled.div`
	max-width: 80%;
	margin: 4rem auto;

	h2 {
		text-align: center;
		margin-bottom: 2.5rem;
		text-transform: uppercase;
		font-size: 2rem;
		color: #ffd533;
		letter-spacing: 2px;

		@media (max-width: 780px) {
			font-size: 1.5rem;
		}
		@media (max-width: 550px) {
			font-size: 1.2rem;
			letter-spacing: 0;
		}
	}
`;

//* Card Component
export const Card = styled.div`
	min-height: 18rem;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

	img {
		border-radius: 10px;
		position: absolute;
		left: 0;
		height: 69%;
		width: 100%;
		object-fit: cover;
	}

	h3 {
		position: absolute;
		width: 100%;
		z-index: 10;
		padding: 0 25px;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 0%);
		background: #0f9425;
		color: #f0f8ff;
		text-align: center;
		font-weight: 600;

		height: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Lobster Two", sans-serif;

		@media (max-width: 1024px) {
			font-size: 1rem;
			width: 100%;
			padding: 0 20px;
		}
	}
	@media (max-width: 1024px) {
		min-height: 18rem;
	}

	@media (max-width: 780px) {
		min-height: 15rem;
	}
`;

export const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

export const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2rem 0;
	color: #f0f8ff;

	h4 {
		color: #0f0800;
		font-size: 0.8rem;

		@media (max-width: 600px) {
			font-size: 0.7rem;
		}

		@media (max-width: 400px) {
			font-size: 0.6rem;
		}
	}
`;

//* Styled Component (NavLink Element)

export const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: linear-gradient(325deg, #357960, #003e29, #357960);
	box-shadow: 0px 5px 20px rgba(150, 255, 150, 0.5);
	width: 5rem;
	height: 5rem;
	margin-right: 10px;
	transform: scale(0.7);
	color: #f0f8ff;

	h4 {
		color: #f0f8ff;
	}

	svg {
		font-size: 1.25rem;
	}

	:hover {
		transform: scale(0.8);
		transition: all 0.2s ease-in-out;
	}

	@media (max-width: 600px) {
		width: 4.8rem;
		height: 4.8rem;

		svg {
			font-size: 1.25rem;
		}
	}

	&.active {
		background: linear-gradient(325deg, #003e29, #357960, #003e29);

		svg,
		h4 {
			color: lavender;
		}
	}
`;

export const FormStyle = styled.form`
	width: 60%;
	margin: auto;

	@media (max-width: 550px) {
		width: 80%;
	}

	div {
		width: 100%;
		position: relative;
	}

	input {
		border: none;
		background: #467061;
		font-size: 1.25rem;
		color: #f0f8ff;
		padding: 0.5rem 3rem;
		outline: none;
		border-radius: 10px;
		width: 100%;
		margin: 0 auto;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);

		::placeholder {
			color: #f0f8ff;
		}

		@media (max-width: 600px) {
			font-size: 1rem;
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: #f0f8ff;
	}
`;
