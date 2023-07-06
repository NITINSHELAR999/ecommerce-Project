import { BeatLoader } from "react-spinners";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contextapi/categories.context";

import CategoryPreview from "../../category-preview/category-preview.component";

import './categories-preview.style.scss'
const CategoriesPreview = () => {
  const { categoriesMap , isLoading } = useContext(CategoriesContext);

  if(isLoading){
    return <BeatLoader className="beatLoader"/>
  }
 

  return (
    <Fragment>
      {
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
       })}
    </Fragment>
  );
};

export default CategoriesPreview;