import { useContext, Fragment } from "react";
import { CategoriesContext } from "../contextapi/categories.context";

// import ProductCard from "../product-card/product-card.component";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";
import {Routes , Route} from 'react-router-dom'
import "./shop.styles.scss";
import Category from '../routes/category/category.component'
const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
