import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";

import { GiKnifeFork } from "react-icons/gi";

// Router
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav>
        <GiKnifeFork />
        <Logo to="/">Deliciousss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </Router>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.nav`
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
    color: #f0f8ff;
  }
`;

export default App;
