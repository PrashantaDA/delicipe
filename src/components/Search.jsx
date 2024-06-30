import { useState } from "react"
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from "./Items.styles";
import { useNavigate } from "react-router-dom";


const Search = () => {

   const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();

   const handleChange = (e) => {
      setSearchTerm(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/searched/${searchTerm}`);
      setSearchTerm("");
   };

   return (
      <FormStyle onSubmit={handleSubmit}>
         <div>
            <FaSearch />
            <input type="text" placeholder="Search..."
               onChange={handleChange}
               value={searchTerm}
            />
         </div>

      </FormStyle>
   );
};


export default Search