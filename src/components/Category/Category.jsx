import CategoryCard from "./CategoryCard";
import categoryInfo from "./categoryData";
import classes from "./category.module.css";
const Category = () => {
  return (
    <section className={classes.categoryContainer}>
      {categoryInfo?.map((info) => {
        const { imgLink, title, id } = info;
        return <CategoryCard imgLink={imgLink} title={title} key={id} />;
      })}
    </section>
  );
};

export default Category;
