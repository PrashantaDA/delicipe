import { useState, useEffect } from 'react'
import { Card } from '../components/Items.styles';
import { Container, Grid } from '../pages/Cuisine';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const Searched = () => {
   const [searched, setSearched] = useState([]);
   const params = useParams();

   const getSearched = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
      const recipes = await data.json();
      setSearched(recipes.results);
   };

   useEffect(() => {
      getSearched(params.search);
   }, [params.search]);

   return (
      <Container>
         <Grid>
            {
               searched.map(recipe => (
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



export default Searched