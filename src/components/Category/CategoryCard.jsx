import classes from "./category.module.css";

const CategoryCard = (props) => {
  const { imgLink, title } = props;

  console.log(CategoryCard);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img
          src={imgLink}
          alt=""
          className="rounded mx-auto d-block"
          height="260"
        />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
