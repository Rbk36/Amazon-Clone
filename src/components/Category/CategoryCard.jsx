import React from "react";

const CategoryCard = ({ data }) => {
  console.log(CategoryCard);
  return (
    <div>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
