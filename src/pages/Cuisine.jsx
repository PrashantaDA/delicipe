import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/Items.styles";

const Cuisine = () => {

   const [cuisine, setCuisine] = useState([]);
   const params = useParams();


   const getCuisine = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };

   useEffect(() => {
      getCuisine(params.cuisine);
   }, [params.cuisine]);

   return (
      <Container>
         <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
         >
            {
               cuisine.map(recipe => (
                  <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Card>
                           <img src={recipe.image} alt={recipe.title} />
                           <h3>{recipe.title}</h3>
                        </Card>
                     </motion.div>
                  </Link>
               ))
            }
         </Grid>
      </Container>
   )
}

export const Container = styled.div`
   max-width: 70%;
   margin: 0 auto;

   @media (max-width: 800px) {
      max-width: 100%;
   }
`;

export const Grid = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
   grid-gap: 2rem;
   padding: 2rem;
   margin: 2rem auto;
   background: #3b4c57;
   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
   border-radius: 20px;

   h3{
      color:#ffd533;
      margin-top: 10px;
   }

   @media (max-width: 550px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   }

`;

export default Cuisine;