import React from "react";

import './directory.item.styles.scss'
import { useNavigate } from "react-router";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
   const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="body">
          <h1>{title}</h1>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
