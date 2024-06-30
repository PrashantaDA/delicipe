import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { SLink } from "./Items.styles";
import { List } from "./Items.styles";

const Category = () => {
	return (
		<List>
			<SLink to={"/cuisine/Italian"}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to={"/cuisine/American"}>
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to={"/cuisine/Japanese"}>
				<GiChopsticks />
				<h4>Japanese</h4>
			</SLink>
			<SLink to={"/cuisine/Thai"}>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to={"/cuisine/Indian"}>
				<FaBowlRice />
				<h4>Indian</h4>
			</SLink>
			<SLink to={"/cuisine/Korean"}>
				<GiChopsticks />
				<h4>Korean</h4>
			</SLink>
		</List>
	);
};

export default Category;
